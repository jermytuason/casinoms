using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Core.Interface
{
    public interface IUserWorkerService
    {
        void SendEmailConfirmationPerUser(string userType, string emailAddress, string fullName);
    }
}
