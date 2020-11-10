using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Core.Model
{
    public class ApplicationSettingsModel
    {
        public string JWT_Secret { get; set; }
        public string AngularDevTest_Url { get; set; }
        public string AzureDevTest_Url { get; set; }
        public string AzureProduction_Url { get; set; }
    }
}
