using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CasinoMS.Core.Common;
using CasinoMS.Core.Constants;
using CasinoMS.Data.Repositories.ErrorLogs;
using CasinoMS.Data.Repository.PlayerRecord;
using CasinoMS.Data.Repository.User;
using CasinoMS.Data.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CasinoMS.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerRecordController : ControllerBase
    {
        #region Private Fields

        private readonly IPlayerRecordRepository playerRecordRepository;
        private readonly IUserRepository userRepository;
        private readonly IErrorLogsRepository errorLogsRepository;
        private string message = "";
        private Guid processId;

        #endregion

        #region Constructor

        public PlayerRecordController(IPlayerRecordRepository playerRecordRepository, IUserRepository userRepository,  IErrorLogsRepository errorLogsRepository)
        {
            this.playerRecordRepository = playerRecordRepository;
            this.userRepository = userRepository;
            this.errorLogsRepository = errorLogsRepository;
        }

        #endregion

        #region APIs

        // GET: api/PlayerRecord
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<PlayerRecordViewModel>>> GetPlayerRecords()
        {
            processId = Guid.NewGuid();
            var user = await GetAuthenticatedUser();

            try
            {
                return Ok(playerRecordRepository.GetAllPlayerRecords(user.Value.TeamName));
            }
            catch (Exception ex)
            {
                if (!ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.GetPlayerRecords, null);
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        #endregion

        #region Private Methods
        private async Task<ActionResult<UserViewModel>> GetAuthenticatedUser()
        {
            processId = Guid.NewGuid();

            try
            {
                string userId = User.Claims.First(x => x.Type == "UserID").Value;
                var securityAccount = await userRepository.GetUserById(userId);
                return userRepository.GetUserByUserId(securityAccount.UserId);
            }
            catch (Exception ex)
            {
                if (ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.PostTransactionDetails, null);
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        private void PostError(Guid processId, string message, string innerException, string api, string executedBy)
        {
            var errorLogViewModel = new ErrorLogsViewModel();
            errorLogViewModel.ProcessId = processId;
            errorLogViewModel.Exception = message;
            errorLogViewModel.InnerException = innerException;
            errorLogViewModel.WebAPI = api;
            errorLogViewModel.ExecutedBy = executedBy;
            errorLogsRepository.AddErrorLog(errorLogViewModel);
            errorLogsRepository.Commit();
        }

        #endregion
    }
}
