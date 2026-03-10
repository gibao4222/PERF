    using Microsoft.EntityFrameworkCore;
using Perf.Api.Data;
    
    var builder = WebApplication.CreateBuilder(args);


    // Add services to the container.
    builder.Services.AddControllers();

    // Đăng ký SQL Server kết nối từ appsettings.json
    builder.Services.AddDbContext<ApplicationDbContext>(options =>
      options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

    // Cấu hình CORS để cho phép frontend admin kết nối
    var adminFrontendUrl = builder.Configuration.GetValue<string>("AdminFrontendUrl") ?? "http://localhost:3000";

    builder.Services.AddCors(options =>
    {
        options.AddDefaultPolicy(policy =>
        {
            policy.WithOrigins(adminFrontendUrl) // URL của frontend admin
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
    });

    // Thêm các dịch vụ cần thiết cho Authorization để [Authorize] hoạt động
    // TODO: Cần cấu hình chi tiết cho JWT hoặc phương thức xác thực khác ở đây
    // builder.Services.AddAuthentication(...);
    builder.Services.AddAuthorization();


    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();

    var app = builder.Build();

    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();

    app.UseCors(); // Phải được gọi trước UseAuthorization và MapControllers

    // app.UseAuthentication(); // Sẽ được kích hoạt sau khi cấu hình dịch vụ Authentication
    app.UseAuthorization();

    var summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    app.MapGet("/weatherforecast", () =>
    {
        var forecast =  Enumerable.Range(1, 5).Select(index =>
            new WeatherForecast
            (
                DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                Random.Shared.Next(-20, 55),
                summaries[Random.Shared.Next(summaries.Length)]
            ))
            .ToArray();
        return forecast;
    })
    .WithName("GetWeatherForecast");

    app.MapControllers(); // Ánh xạ các routes từ controllers

    app.Run();

    record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
    {
        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
    }
