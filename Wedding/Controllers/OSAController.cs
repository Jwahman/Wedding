using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace Wedding.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OSAController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;

        [HttpPost]
        public IActionResult Post()
        {
            string result;
            using(var reader = new StreamReader(Request.Body))
            {
                var body = reader.ReadToEndAsync();
                result = body.Result;
            }

            var jo = JObject.Parse(result);
            var subject = jo["subject"].ToString();
            sendMail("test");
            return Ok();
        }

        private void sendMail(string message)
        {
            SmtpClient client = new SmtpClient("hotmail-com.olc.protection.outlook.com");
            client.EnableSsl = true;
            client.Port = 25;
            client.UseDefaultCredentials = false;
            client.Credentials = new NetworkCredential("johanneseriksson89@hotmail.com", "KaftRokaF3t");

            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("johanneseriksson89@hotmail.com");
            mailMessage.To.Add("jesswed2020@hotmail.com");
            mailMessage.Body = "body";
            mailMessage.Subject = "subject";
            client.Send(mailMessage);
        }
    }
}