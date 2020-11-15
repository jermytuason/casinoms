using CasinoMS.Core.Interface;
using CasinoMS.Core.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Core.WorkerService
{
    public class LoaderNotificationWorkerService : ILoaderNotification
    {
        private MessageModel model;

        public LoaderNotificationWorkerService()
        {
            model = new MessageModel();
        }

        public MessageModel EmailConfirmation(string fullName, string email = null, string defaultPassword = null, bool? isApproved = null)
        {
            model.Subject = "Casino MS Loader Account Confirmation";
            model.Body = $"<p>Good Day {fullName},</p>" +
                            "<p> Welcome to Casino MS! Your Loader Account has been successfully validated and is now active. " +
                            "You can now utilize the system's functionality such as recording of your cash-in &amp; cash-out transactions, " +
                            "searching of reference number to prevent fraud/scamming incident from unwanted players and transaction tracking.</p> " +
                            "<p> For suggestions or functionality request, please send an email to&nbsp; " +
                            "<a href = 'mailto:jjttechnologies@gmail.com'> jjttechnologies@gmail.com </a>.</p> " +
                            "<p> Best regards,</p>" +
                            "<p> Casino MS Team</p>";
            model.Email = "jjttechnologies@gmail.com";
            model.Password = "tuasondndn1831";

            return model;
        }

        public MessageModel EmailNotification(string fullName)
        {
            throw new NotImplementedException();
        }

        public MessageModel EmailVerification(string fullName)
        {
            model.Subject = "Casino MS Loader Account Verification";
            model.Body = $"<p>Good Day {fullName},</p>" +
                            "<p> &nbsp;</p>" +
                            "<p> Welcome to Casino MS! Your Loader Account activation is now being processed and will be activated within 24 hours. " +
                            "Please be on the lookout for our next e-mail. Thank you for choosing Casino MS</p> " +
                            "<p> &nbsp;</p>" +
                            "<p> For suggestions or functionality request, please send an email to&nbsp; " +
                            "<a href = 'mailto:jjttechnologies@gmail.com'> jjttechnologies@gmail.com </a>.</p> " +
                            "<p> &nbsp;</p> " +
                            "<p> Best regards,</p>" +
                            "<p> Casino MS Team</p>";
            model.Email = "jjttechnologies@gmail.com";
            model.Password = "tuasondndn1831";

            return model;
        }

        public MessageModel SMSConfirmation()
        {
            throw new NotImplementedException();
        }

        public MessageModel SMSVerification()
        {
            throw new NotImplementedException();
        }
    }
}
