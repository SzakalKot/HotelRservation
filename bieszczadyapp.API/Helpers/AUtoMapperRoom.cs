using AutoMapper;
using bieszczadyapp.API.Dtos;
using bieszczadyapp.API.Models;

namespace bieszczadyapp.API.Helpers
{
    public class AUtoMapperRoom : Profile
    {
        public AUtoMapperRoom(){
            CreateMap<Room , RoomForListDto>();
            CreateMap<RoomForListDto ,Room>();
            
        }
    }
}