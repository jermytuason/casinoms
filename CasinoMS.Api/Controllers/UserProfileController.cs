using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CasinoMS.Core.Common;
using CasinoMS.Core.Constants;
using CasinoMS.Data.Repositories.ErrorLogs;
using CasinoMS.Data.Repository.User;
using CasinoMS.Data.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CasinoMS.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        #region Private Fields

        private readonly IUserRepository userRepository;
        private readonly IErrorLogsRepository errorLogsRepository;
        private string message = "";
        private Guid processId;

        #endregion

        #region Constructor

        public UserProfileController(IUserRepository userRepository, IErrorLogsRepository errorLogsRepository)
        {
            this.userRepository = userRepository;
            this.errorLogsRepository = errorLogsRepository;
        }

        #endregion

        #region API

        [HttpGet]
        [Authorize]
        // GET: /api/UserProfile
        public async Task<ActionResult<UserViewModel>> GetUserProfile()
        {
            var userId = "";
            processId = Guid.NewGuid();

            try
            {
                userId = User.Claims.First(x => x.Type == "UserID").Value;
                var securityAccount = await userRepository.GetUserById(userId);
                return userRepository.GetUserByUserId(securityAccount.UserId);
            }
            catch (Exception ex)
            {
                if (ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.GetUserProfile, userId);
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        #endregion

        #region Private Methods 

        private void PostError(Guid processId ,string message, string innerException, string api, string executedBy)
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
