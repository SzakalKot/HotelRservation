using bieszczadyapp.API.Models;
using System.Collections.Generic;

namespace bieszczadyapp.API.Dtos
{
    public class UserForDetailDto
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public  byte[] PasswordSalt { get; set; }
        public string email { get; set; }
        public string name { get; set; }
        public string phoneNumber { get; set; }
        public string Role { get; set; }
        public string surname { get; set; }


    }
}