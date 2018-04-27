using System.Threading.Tasks;
using AutoMapper;
using bieszczadyapp.API.Data;
using bieszczadyapp.API.Dtos;
using bieszczadyapp.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace bieszczadyapp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class reservationController : Controller
    {
        private readonly IMapper _maper;
        private readonly IReservationRepository _repo;

        public reservationController(IMapper mapper , IReservationRepository repo)
        {
         _maper = mapper ;   
         _repo = repo ;
        }
        [HttpPost]
        public async Task<IActionResult> AddReservation([FromBody]reservationDto reservationDto )
        {
            
              if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var reservationForCreate = _maper.Map<Reservation>(reservationDto);
            var reservationCreate = await _repo.Addreservation(reservationForCreate );
            var reservartionToreturn = _maper.Map<reservationDto>(reservationCreate);

            return CreatedAtRoute("GetReservation" ,reservartionToreturn );

        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetReservation(int id) {
            var reservationSpecific = await _repo.GetReservation(id);
            return Ok(reservationSpecific);
        }
    }
}