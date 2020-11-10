using CasinoMS.Data.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Data.Repositories.ErrorLogs
{
    public interface IErrorLogsRepository
    {
        void AddErrorLog(ErrorLogsViewModel model);
        bool Commit();
    }
}
