using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using bieszczadyapp.API.Data;
using bieszczadyapp.API.Models;
using System.Threading.Tasks;
using bieszczadyapp.API.Helpers;
using System.Collections;
using bieszczadyapp.API.Dtos;
using System.Collections.Generic;

namespace bieszczadyapp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class RoomController :Controller
    {
        private readonly IRoomRepository _repo ;
       
        public RoomController(IRoomRepository repo )
        {
            _repo =repo;
            
        }
        [HttpGet]
        public async Task<IActionResult> GetRooms()
        {
            var rooms = await _repo.GetRooms();

            return Ok(rooms);
            
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRoom(int id)
        {
            var rooms = await _repo.GetRoom(id);

            return Ok(rooms);
            
        }
       
    }
}