using System.Collections.Generic;
using bieszczadyapp.API.Models;
using Newtonsoft.Json;

namespace bieszczadyapp.API.Data
{
    public class RoomSeedData
    {
        private readonly DataContext _context;
        public RoomSeedData(DataContext context)
        {
            _context = context ;
        }

        public void seedRooms(){
            var room = System.IO.File.ReadAllText("Data/RoomsSeed.json");
            var rooms = JsonConvert.DeserializeObject<List<Room>>(room);
            foreach(var room1 in rooms)
            {
                _context.Rooms.Add(room1);
            }

            _context.SaveChanges();
        }
        
    }
}