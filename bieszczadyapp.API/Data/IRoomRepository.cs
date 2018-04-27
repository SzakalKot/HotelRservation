using System.Collections.Generic;
using System.Threading.Tasks;
using bieszczadyapp.API.Models;

namespace bieszczadyapp.API.Data
{
    public interface IRoomRepository
    {
         void Add<T>(T entity) where T:class;

         void Delete<T>(T entity) where T:class;
         Task<bool> SaveAll();
         Task<IEnumerable<Room>> GetRooms();
         Task<Room> GetRoom(int id);
    }
}