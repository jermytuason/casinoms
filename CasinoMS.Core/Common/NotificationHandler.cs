using CasinoMS.Core.Interface;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace CasinoMS.Core.Common
{
    public static class NotificationHandler
    {
        public static void SendEmailNotification(INotification notification, string emailTo, string fullName)
        {
            var model = notification.EmailNotification(fullName);

            SendEmail(model.Email, emailTo, model.Subject, model.Body);
        }
        public static void SendEmailConfirmation(INotification notification, string fullName, string emailTo, string defaultPassword = null, bool? isApproved = null)
        {
            var model = notification.EmailConfirmation(fullName, emailTo, defaultPassword, isApproved);

            SendEmail(model.Email, emailTo, model.Subject, model.Body);
        }

        public static void SendEmailVerification(INotification notification, string fullName, string emailTo)
        {
            var model = notification.EmailVerification(fullName);

            SendEmail(model.Email, emailTo, model.Subject, model.Body);
        }

        public static void SendSMSConfirmation()
        {
            throw new NotImplementedException();
        }

        public static void SendSMSVerification()
        {
            throw new NotImplementedException();
        }

        private static void SendEmail(string email, string emailTo, string subject, string body)
        {
            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(email, "fxmbbcknbnedhljb"),
                Timeout = 10000
            };
            using (var message = new MailMessage(email, emailTo)
            {
                IsBodyHtml = true,
                Subject = subject,
                Body = body

            })
            {
                smtp.Send(message);
            }
        }
    }
}
