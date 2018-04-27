using System.Collections.Generic;
using bieszczadyapp.API.Models;
using Newtonsoft.Json;

namespace bieszczadyapp.API.Data
{
    public class Seed
    {
        private readonly DataContext _context ;

        public Seed(DataContext context)
        {
            _context = context ;
        }
        public void SeedUsers() {
            var userData = System.IO.File.ReadAllText("Data/DataSeeder.json");
            var users = JsonConvert.DeserializeObject<List<User>>(userData);
            foreach (var user in users)
            {
                //create the password hask 
                byte[] passwordHash ,passwordSalt ;
                CreatePasswordHash("password" ,out passwordHash ,out passwordSalt);

                user.PasswordHash = passwordHash ;
                user.PasswordSalt = passwordSalt ;
                user.Username = user.Username.ToLower();
                
                _context.Users.Add(user);

            }
            _context.SaveChanges();
            
        }
        
         private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
          using(  var hmac = new System.Security.Cryptography.HMACSHA512())
          {
              passwordSalt=hmac.Key;
              passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
          }
        }

    }
}