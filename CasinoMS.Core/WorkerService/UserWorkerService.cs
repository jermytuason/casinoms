using CasinoMS.Core.Interface;
using CasinoMS.Core.Common;
using System;
using System.Collections.Generic;
using System.Text;
using CasinoMS.Core.Constants;

namespace CasinoMS.Core.WorkerService
{
    public class UserWorkerService : IUserWorkerService
    {
        #region Private Fields

        private readonly ILoaderNotification loaderNotification;
        private readonly IFinancerNotification financerNotification;

        #endregion

        public UserWorkerService(ILoaderNotification loaderNotification, IFinancerNotification financerNotification)
        {
            this.loaderNotification = loaderNotification;
            this.financerNotification = financerNotification;
        }

        public void SendEmailConfirmationPerUser(string userType, string emailAddress, string fullName)
        {
            if (userType.Equals(UserTypeConstants.Loader))
            {
                NotificationHandler.SendEmailConfirmation(loaderNotification, fullName, emailAddress);
            }
            else if (userType.Equals(UserTypeConstants.Financer))
            {
                NotificationHandler.SendEmailConfirmation(financerNotification, fullName, emailAddress);
            }
        }

        public void SendEmailVerificationPerUser(string userType, string emailAddress, string fullName)
        {
            if (userType.Equals(UserTypeConstants.Loader))
            {
                NotificationHandler.SendEmailVerification(loaderNotification, fullName, emailAddress);
            }
            else if (userType.Equals(UserTypeConstants.Financer))
            {
                NotificationHandler.SendEmailVerification(financerNotification, fullName, emailAddress);
            }
        }

        public void SendResetPasswordEmailConfirmationPerUser(string userType, string emailAddress, string fullName, string newPassword)
        {
            if (userType.Equals(UserTypeConstants.Loader))
            {
                NotificationHandler.SendResetPasswordEmailConfirmation(loaderNotification, fullName, emailAddress, newPassword);
            }
            else if (userType.Equals(UserTypeConstants.Financer))
            {
                NotificationHandler.SendResetPasswordEmailConfirmation(financerNotification, fullName, emailAddress, newPassword);
            }
        }
    }
}
