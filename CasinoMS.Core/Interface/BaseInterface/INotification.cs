using CasinoMS.Core.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Core.Interface
{
    public interface INotification
    {
        MessageModel EmailNotification(string fullName);
        MessageModel EmailConfirmation(string fullName, string email = null, string defaultPassword = null, bool? isApproved = null);
        MessageModel EmailVerification(string fullName);
        MessageModel ResetPasswordEmailConfirmation(string fullName, string newPassword);
        MessageModel SMSConfirmation();
        MessageModel SMSVerification();
    }
}
