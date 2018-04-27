using System;

namespace bieszczadyapp.API.Dtos
{
    public class ReservationForListDto
    {
       
        public int UserId { get; set; }
        
        public int RoomId { get; set; }
        
        public DateTime StartTime { get; set; }
        
        public DateTime EndTime { get; set; }
        
        public int charge { get; set; } 
    }
}