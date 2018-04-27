using System.Linq;
using AutoMapper;
using bieszczadyapp.API.Dtos;
using bieszczadyapp.API.Models;

namespace bieszczadyapp.API.Helpers
{
    public class AutoMaperProfiles : Profile
    {
        public AutoMaperProfiles()
        {
            CreateMap<User ,UserForListDto>();
            CreateMap<UserForRegisterDto , User>();
            CreateMap<User ,UserForDetailDto>();
                
        }
    }
}