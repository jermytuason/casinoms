using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Core.Constants
{
    public static class UserTypeConstants
    {
        public const string Financer = "Financer";
        public const string Agent = "Agent";
        public const string Loader = "Loader"; 
    }

    public static class WebAPINamesConstants
    {
        public const string PostUser = "PostUser";
        public const string GetAuthenticatedUser = "GetAuthenticatedUser";
        public const string GetUserTypes = "GetUserTypes";
        public const string GetUserTypeById = "GetUserTypeById";
        public const string GetUserTypeByDescription = "GetUserTypeByDescription";
        public const string GetAllTeams = "GetAllTeams";
        public const string GetTeamById = "GetTeamById";
        public const string GetTeamByDescription = "GetTeamByDescription";
        public const string Login = "Login";
        public const string PostTransactionDetails = "PostTransactionDetails";
        public const string GetUserProfile = "GetUserProfile";
        public const string GetTransactionDetails = "GetTransactionDetails";
    }
}
