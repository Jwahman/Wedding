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
    [ApiController]
    [Route("api/[controller]")]
    public class RSVPController : ControllerBase
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
            string status = jo["status"].ToString();
            if (status == "True")
            {
                var osaNames = jo["osaNames"].ToString();
                var churchToBlomTran = jo["churchToBlomTran"].ToString();
                var blomToCenTran = jo["blomToCenTran"].ToString();
                var allergies = jo["allergies"].ToString();
                var message = jo["message"].ToString();
                BuildAcceptMail(osaNames, churchToBlomTran, blomToCenTran, allergies, message);
            }
            else 
            {
                var osaNames = jo["osaNames"].ToString();
                var message = jo["message"].ToString();
                BuildDeclineMail(osaNames, message);
            }
            return Ok();
        }

        private void BuildDeclineMail(string osaNames, string message)
        {
            string body = "Namn: " + osaNames + Environment.NewLine +
                                "Meddelande: " + message;
            SendMail(body, osaNames);
        }

        private void BuildAcceptMail(string osaNames, string churchToBlomTran, string blomToCenTran, string allergies, string message)
        {
            string body = "Namn: " + osaNames + Environment.NewLine +
                                "Skjuts mellan Alters Kyrka och Blomsterhult: " + (churchToBlomTran == "True" ? "Ja" : "Nej") + Environment.NewLine +
                                "Skjuts från Blomsterhult till centrum: " + (blomToCenTran == "True" ? "Ja" : "Nej") + Environment.NewLine +
                                "Allergies/Specialkost: " + allergies + Environment.NewLine +
                                "Meddelande: " + message;
            SendMail(body, osaNames);
        }

        public void SendMail(string body, string osaNames)
        {
            SmtpClient client = new SmtpClient("hotmail-com.olc.protection.outlook.com");
            client.EnableSsl = true;
            client.Port = 25;
            client.UseDefaultCredentials = false;
            client.Credentials = new NetworkCredential("johanneseriksson89@hotmail.com", "KaftRokaF3t");

            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("johanneseriksson89@hotmail.com");
            mailMessage.To.Add("jesswed2020@hotmail.com");
            mailMessage.Body = body;
            mailMessage.Subject = osaNames;
            client.Send(mailMessage);
        }
    }
}