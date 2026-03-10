using Microsoft.EntityFrameworkCore;

namespace Perf.Api.Data
{
    // Lớp này đại diện cho bảng User trong Database
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
    }

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) 
            : base(options) { }

        // Khai báo bảng Users
        public DbSet<User> Users { get; set; }
    }
}