using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bieszczadyapp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace bieszczadyapp.API.Data
{
    public class ReservationRepository : IReservationRepository
    {
         private readonly DataContext _context;

         public ReservationRepository(DataContext context)
         {
             _context = context ;
         }


        public async Task<Reservation> Addreservation(Reservation reservation)
        {
            await _context.Reservation.AddAsync(reservation);
            await _context.SaveChangesAsync();

            return reservation;
        }

        public async Task<IEnumerable<Reservation>> GetReservation(int id)
        {
            //var reservations = await _context.Reservation.Where( u => u.UserId == id);
            var reservationtoReturn = await _context.Reservation.Where(U => U.UserId == id).ToListAsync();
            return reservationtoReturn;
        }

        public async Task<IEnumerable<Reservation>> GetReservations()
        {
           var reservations = await _context.Reservation.ToListAsync();
           return reservations;
        }


    }
}