using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Core.Common
{
    public static class DataHandler
    {
        public static string GetFullName(string firstName, string lastName, string middleName = null)
        {
            if (!string.IsNullOrWhiteSpace(middleName))
            {
                middleName = $"{middleName} ";
            }

            var result = $"{firstName} {middleName}{lastName}";
            return result;
        }

        public static string[] SplitStringByComma(string stringToSplit)
        {
            return stringToSplit.Split(",");
        }

        public static string GetString(string stringMessage)
        {
            var result = "";

            if (stringMessage != null)
            {
                result = stringMessage;
            }

            return result;
        }
    }
}
