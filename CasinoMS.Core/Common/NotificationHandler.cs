﻿using CasinoMS.Core.Interface;
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

            SendEmail(model.Email, emailTo, model.Subject, model.Body, model.Password);
        }
        public static void SendEmailConfirmation(INotification notification, string fullName, string emailTo, string defaultPassword = null, bool? isApproved = null)
        {
            var model = notification.EmailConfirmation(fullName, emailTo, defaultPassword, isApproved);

            SendEmail(model.Email, emailTo, model.Subject, model.Body, model.Password);
        }

        public static void SendEmailVerification()
        {
            throw new NotImplementedException();
        }

        public static void SendSMSConfirmation()
        {
            throw new NotImplementedException();
        }

        public static void SendSMSVerification()
        {
            throw new NotImplementedException();
        }

        private static void SendEmail(string email, string emailTo, string subject, string body, string password)
        {
            //using (MailMessage mm = new MailMessage(email, emailTo))
            //{
            //    mm.Subject = subject;
            //    mm.Body = body;

            //    mm.IsBodyHtml = true;
            //    SmtpClient smtp = new SmtpClient();
            //    smtp.Host = "smtp.gmail.com";
            //    smtp.EnableSsl = true;
            //    NetworkCredential NetworkCred = new NetworkCredential(email, password);
            //    smtp.UseDefaultCredentials = false;
            //    smtp.Credentials = NetworkCred;
            //    smtp.Port = 587;
            //    smtp.Send(mm);
            //}

            using (MailMessage mail = new MailMessage())
            {
                mail.From = new MailAddress(email);
                mail.To.Add(emailTo);
                mail.Subject = subject;
                mail.Body = body;
                mail.IsBodyHtml = true;

                using (SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587))
                {
                    smtp.Credentials = new NetworkCredential(email, password);
                    smtp.EnableSsl = true;
                    smtp.Send(mail);
                }
            }
        }
    }
}
