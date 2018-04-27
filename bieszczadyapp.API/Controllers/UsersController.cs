using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using bieszczadyapp.API.Data;
using bieszczadyapp.API.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using static Microsoft.AspNetCore.Hosting.Internal.HostingApplication;

namespace bieszczadyapp.API.Controllers
{
     [Authorize]
     [Route("api/[controller]")]
    public class UsersController : Controller
    {
       
        private readonly IRespository _repo ;
        private readonly IMapper _mapper;
        
        
        public UsersController(IRespository repo , IMapper mapper ) 
        {
            _mapper = mapper;
            
            _repo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();
            var userToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);
            return Ok(users);
        }

        [HttpGet("{id}" , Name="GetUser")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            return Ok(user);
        }
        [AllowAnonymous]
        [HttpPost("{id}/delete")]
        public  async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _repo.DeleteUser(id);
            return Ok();
        }

    }
}