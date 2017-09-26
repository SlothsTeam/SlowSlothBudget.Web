using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace SlowSlothBudget.Web.Controllers
{
    [Route("api/[controller]")]
    public class DiscoveryServiceMockController : Controller
    {
        private readonly string _apiBaseUrl;
        
        public DiscoveryServiceMockController(IConfiguration configuration)
        {
            var apiFullyQualifiedDomainName = configuration.GetValue("API_ENV_DOCKERCLOUD_CONTAINER_FQDN", "");
            var apiPort = configuration.GetValue("API_PORT_NUMBER", "");
            _apiBaseUrl = $"{apiFullyQualifiedDomainName}:{apiPort}";
        }

        [HttpGet("[action]")]
        public JsonResult ApiAddress()
        {
            return Json(_apiBaseUrl);
        }
    }
}
