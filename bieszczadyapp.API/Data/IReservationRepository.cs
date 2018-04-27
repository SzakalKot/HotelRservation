using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using bieszczadyapp.API.Models;

namespace bieszczadyapp.API.Data
{
    public interface IReservationRepository
    {
         Task<Reservation> Addreservation(Reservation reservation);
         Task<IEnumerable<Reservation>> GetReservations();
         Task<IEnumerable<Reservation>> GetReservation(int id);
    }
}