using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Core.Common
{
    public static class ObjectHandler
    {
        public static bool IsObjectNull(object obj)
        {
            if (obj == null) return true;
            else return false;
        }
    }
}
