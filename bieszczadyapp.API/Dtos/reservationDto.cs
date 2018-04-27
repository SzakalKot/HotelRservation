using System;
using System.ComponentModel.DataAnnotations;

namespace bieszczadyapp.API.Dtos
{
    public class reservationDto
    {

        [Required]
        public int UserId { get; set; }
        [Required]
        public int RoomId { get; set; }
        [Required]
        public DateTime StartTime { get; set; }
        [Required]
        public DateTime EndTime { get; set; }
        [Required]
        public int charge { get; set; }
        public reservationDto()
        {
            StartTime = DateTime.Now;
            EndTime = DateTime.Now;
        }


    }
}