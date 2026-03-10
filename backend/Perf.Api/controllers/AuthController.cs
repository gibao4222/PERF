using Microsoft.AspNetCore.Mvc;
using Perf.Api.Data; 

namespace Perf.Api.Controllers
{
    public class RegisterRequestDto
    {
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? Email { get; set; }
    }

    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        // Constructor để Inject Database vào Controller
        public AuthController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterRequestDto request)
        {
            if (string.IsNullOrEmpty(request.Username) || string.IsNullOrEmpty(request.Password))
            {
                return BadRequest("Username and password are required.");
            }

            // Kiểm tra user đã tồn tại chưa
            if (_context.Users.Any(u => u.Username == request.Username))
            {
                return BadRequest("User already exists!");
            }

            // Tạo user mới và lưu vào DB
            var newUser = new User
            {
                Username = request.Username,
                PasswordHash = request.Password, // Tạm thời để plain text
                Email = request.Email ?? ""
            };

            _context.Users.Add(newUser);
            _context.SaveChanges();

            return Ok(new { Message = $"User '{request.Username}' registered successfully!" });
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] RegisterRequestDto request)
        {
            if (string.IsNullOrEmpty(request.Username) || string.IsNullOrEmpty(request.Password))
            {
                return BadRequest("Vui lòng nhập đầy đủ tài khoản và mật khẩu.");
            }

            // Tìm User trong Database
            var user = _context.Users.FirstOrDefault(u => u.Username == request.Username);

            // Kiểm tra mật khẩu (so sánh trực tiếp)
            if (user == null || user.PasswordHash != request.Password)
            {
                return Unauthorized(new { Message = "Tên đăng nhập hoặc mật khẩu không chính xác!" });
            }

            return Ok(new
            {
                Message = "Đăng nhập thành công!",
                User = new { user.Username, user.Email }
            });
        }
    }
}