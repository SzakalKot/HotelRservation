using System.Collections.Generic;
using System.Threading.Tasks;
using bieszczadyapp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace bieszczadyapp.API.Data
{
    public class UserRepository : IRespository
    {
        private readonly DataContext _context;
        public UserRepository(DataContext context)
        {
            _context = context ;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<User> DeleteUser(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserId == id);
            var delete = _context.Users.Remove(user);

            await _context.SaveChangesAsync();
         return  user;
 
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserId == id);

            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.ToListAsync();
            return users ;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public void Update<T>(T entity)
        {
            throw new System.NotImplementedException();
        }

        public Task<User> UpdateRole(int id, string role)
        {
            throw new System.NotImplementedException();
        }
    }
}