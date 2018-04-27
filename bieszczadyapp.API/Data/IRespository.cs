using System.Collections.Generic;
using System.Threading.Tasks;
using bieszczadyapp.API.Models;

namespace bieszczadyapp.API.Data
{
    public interface IRespository
    {
         void Add<T>(T entity) where T:class;

         void Delete<T>(T entity) where T:class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
         Task<User> DeleteUser(int id );
         Task<User> UpdateRole(int id ,string role);
         void Update<T>(T entity);

         
    }
}