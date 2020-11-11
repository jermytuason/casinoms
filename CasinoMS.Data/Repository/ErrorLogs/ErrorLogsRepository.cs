using CasinoMS.Data.Entity.Information;
using CasinoMS.Data.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Data.Repositories.ErrorLogs
{
    public class ErrorLogsRepository : IErrorLogsRepository
    {
        #region Private Fields

        private readonly CasinoMSDBContext casinoMSDBContext;

        #endregion

        #region Constructor

        public ErrorLogsRepository(CasinoMSDBContext casinoMSDBContext)
        {
            this.casinoMSDBContext = casinoMSDBContext;
        }

        #endregion

        public void AddErrorLog(ErrorLogsViewModel model)
        {
            var errorLog = new InfErrorLogs();

            errorLog.ProcessId = model.ProcessId;
            errorLog.Exception = model.Exception;
            errorLog.InnerException = model.InnerException;
            errorLog.WebAPI = model.WebAPI;
            errorLog.ExecutedBy = model.ExecutedBy;
            errorLog.ExecutedDate = DateTime.UtcNow.AddHours(8);

            casinoMSDBContext.Add(errorLog);
        }

        public bool Commit()
        {
            return casinoMSDBContext.SaveChanges() > 0;
        }
    }
}
