using System.Threading.Tasks;
using AutoMapper;
using bieszczadyapp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace bieszczadyapp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class StatusController : Controller
    {

        private readonly IReservationRepository _repo;

        public StatusController(IMapper mapper , IReservationRepository repo)
        {
        
         _repo = repo ;
        }

        [HttpGet]
        public async Task<IActionResult> GetReservation() {
            var reservations = await _repo.GetReservations();
            return Ok(reservations);
        }
    }
}