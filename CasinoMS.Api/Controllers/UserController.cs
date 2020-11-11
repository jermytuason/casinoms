using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CasinoMS.Core.Common;
using CasinoMS.Core.Constants;
using CasinoMS.Core.Interface;
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
    public class UserController : ControllerBase
    {

        #region Private Fields

        private readonly IUserRepository userRepository;
        private readonly IErrorLogsRepository errorLogsRepository;
        private readonly IUserWorkerService userWorkerService;
        private string message = "";
        private Guid processId;

        #endregion

        #region Constructor

        public UserController(IUserRepository userRepository, IErrorLogsRepository errorLogsRepository, IUserWorkerService userWorkerService)
        {
            this.userRepository = userRepository;
            this.errorLogsRepository = errorLogsRepository;
            this.userWorkerService = userWorkerService;
        }

        #endregion

        // GET: api/User/GetUserByUserName
        [HttpGet]
        [Route("GetUserByUserName/{userName}")]
        public async Task<ActionResult<IEnumerable<UserViewModel>>> GetUserByUserName(string userName)
        {
            processId = Guid.NewGuid();

            try
            {
                return Ok(await userRepository.GetUserByUserName(userName));
            }
            catch (Exception ex)
            {
                if (!ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.GetTransactionDetails, null);
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        // GET: api/User/GetAllLoaderUsersByTeam
        [HttpGet]
        [Authorize]
        [Route("GetAllLoaderUsersByTeam")]
        public async Task<ActionResult<IEnumerable<UserViewModel>>> GetAllLoaderUsersByTeam()
        {
            processId = Guid.NewGuid();
            var user = await GetAuthenticatedUser();

            try
            {
                return Ok(userRepository.GetAllLoaderUsersByTeam(user.Value.TeamName));
            }
            catch (Exception ex)
            {
                if (!ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.GetTransactionDetails, user.Value.UserName);
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        // POST: api/User
        [HttpPost]
        public async Task<object> Post([FromBody] UserViewModel model)
        {
            try
            {
                var result = await userRepository.AddAccountEntity(model);

                if (userRepository.Commit())
                {
                    userWorkerService.SendEmailConfirmationPerUser(model.UserType, model.EmailAddress, DataHandler.GetFullName(model.FirstName, model.LastName));
                    return Ok(result);
                }

                return BadRequest($"Failed to save new user.");
            }
            catch (Exception ex)
            {
                if (!ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.PostUser, null);
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        #region Private Methods

        private async Task<ActionResult<UserViewModel>> GetAuthenticatedUser()
        {
            try
            {
                string userId = User.Claims.First(x => x.Type == "UserID").Value;
                var securityAccount = await userRepository.GetUserById(userId);
                return userRepository.GetUserByUserId(securityAccount.UserId);
            }
            catch (Exception ex)
            {
                if (!ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.GetAuthenticatedUser, null);
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
