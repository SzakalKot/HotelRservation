using System.ComponentModel.DataAnnotations;

namespace bieszczadyapp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8 , MinimumLength=4 , ErrorMessage="Your password must have at leat 4 characters")]
        public string Password { get; set; }
        [Required]
        public string email { get; set; }
        [Required]
        public string phoneNumber { get; set; }
        [Required]
        public string surname { get; set; }

    }
}