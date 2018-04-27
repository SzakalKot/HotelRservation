using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace bieszczadyapp.API.Models
{
    public class User
    {
        public int UserId { get; set; } 
        public byte[]  PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Username { get; set; }
        public string name { get; set; }
        public string Surname { get; set; }
        public string email { get; set; }
        public string phoneNumber { get; set; }
        public string Role { get; set; }


    }
}