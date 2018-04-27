using AutoMapper;
using bieszczadyapp.API.Dtos;
using bieszczadyapp.API.Models;

namespace bieszczadyapp.API.Helpers
{
    public class AutoMapperReservation : Profile
    {
        public AutoMapperReservation() {
            CreateMap<reservationDto , Reservation>();
            CreateMap<Reservation , reservationDto>();
            CreateMap<ReservationForListDto ,Reservation>();
            CreateMap<Reservation , ReservationForListDto>();
        }
    }
}