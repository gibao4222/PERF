using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Perf.Api.Controllers.Admin
{
    [ApiController]
    [Route("api/admin/[controller]")]
    // [Authorize(Roles = "Admin")] // Tạm thời vô hiệu hóa để kiểm thử
    public class DashboardController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAdminDashboardData()
        {
            // TODO: Thêm logic để lấy dữ liệu cho dashboard của admin từ database hoặc service khác.
            var data = new
            {
                TotalUsers = 1500,
                NewOrders = 25,
                Revenue = 12500.75m,
                Message = "Welcome to the Admin Dashboard!"
            };
            return Ok(data);
        }
    }
}
