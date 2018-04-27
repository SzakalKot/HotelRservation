using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using bieszczadyapp.API.Data;
using bieszczadyapp.API.Dtos;
using bieszczadyapp.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace bieszczadyapp.API.Controllers
{
   
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;

        public AuthController(IAuthRepository repo ,IConfiguration config , IMapper mapper)
        {
            _config = config;
            _repo = repo;
            _mapper= mapper;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]UserForRegisterDto userForRegisterDto)
        {
            if(string.IsNullOrEmpty(userForRegisterDto.Username))
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();
           
            if(await _repo.UserExist(userForRegisterDto.Username))
                ModelState.AddModelError("Username" , "Nick jest juz zajety");

            //validation reqeust
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

           
        var userToCreate = _mapper.Map<User>(userForRegisterDto);

        var createUser = await _repo.Register(userToCreate,userForRegisterDto.Password);
        
        var userToReturn = _mapper.Map<UserForDetailDto>(createUser);
        



            return CreatedAtRoute("GetUser" , new {controller = "Users" ,id = createUser.UserId } , userToReturn );

        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]UserForLoginDto userForLoginDto)
        {
        var userFromRepo =await _repo.Login(userForLoginDto.Username.ToLower(), userForLoginDto.Password);

        if(userFromRepo == null)
        return Unauthorized();

        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_config.GetSection("AppSettings:Token").Value);
        var tokenDescription = new SecurityTokenDescriptor 
        {
            Subject = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.UserId.ToString()),
                new Claim(ClaimTypes.Name,userFromRepo.Username),
                new Claim(ClaimTypes.Role , userFromRepo.Role)
            }),
            Issuer="",
            Expires = DateTime.Now.AddDays(1),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),SecurityAlgorithms.HmacSha512Signature)

        };
        var token = tokenHandler.CreateToken(tokenDescription);
        var tokenString = tokenHandler.WriteToken(token);

        return Ok(new{tokenString});
        }
    }
}