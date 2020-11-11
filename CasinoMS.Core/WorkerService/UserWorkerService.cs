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
    }
}
