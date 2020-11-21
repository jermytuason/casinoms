using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Core.Interface
{
    public interface IUserWorkerService
    {
        void SendEmailConfirmationPerUser(string userType, string emailAddress, string fullName);
        void SendEmailVerificationPerUser(string userType, string emailAddress, string fullName);
        void SendResetPasswordEmailConfirmationPerUser(string userType, string emailAddress, string fullName, string newPassword);
    }
}
