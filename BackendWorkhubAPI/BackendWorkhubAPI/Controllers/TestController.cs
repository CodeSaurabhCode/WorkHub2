using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackendWorkhubAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class TestController : ControllerBase
	{
		[HttpGet]
		public IActionResult Get()
		{
			var message = "Connected with WorkHub Backend API Successfully";
			return Ok(new { message });
		}
	}
}
