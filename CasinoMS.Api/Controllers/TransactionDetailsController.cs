﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CasinoMS.Core.Common;
using CasinoMS.Core.Constants;
using CasinoMS.Data.Repositories.ErrorLogs;
using CasinoMS.Data.Repository.TransactionDetails;
using CasinoMS.Data.Repository.User;
using CasinoMS.Data.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CasinoMS.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionDetailsController : ControllerBase
    {
        #region Private Fields

        private readonly ITransactionDetailsRepository transactionDetailsRepository;
        private readonly IUserRepository userRepository;
        private readonly IErrorLogsRepository errorLogsRepository;
        private string message = "";
        private Guid processId;

        #endregion

        #region Constructor

        public TransactionDetailsController(ITransactionDetailsRepository transactionDetailsRepository, IUserRepository userRepository, IErrorLogsRepository errorLogsRepository)
        {
            this.transactionDetailsRepository = transactionDetailsRepository;
            this.userRepository = userRepository;
            this.errorLogsRepository = errorLogsRepository;
        }

        #endregion

        // GET: api/GetTransactionDetails
        [HttpGet]
        [Authorize]
        public ActionResult<IEnumerable<TransactionDetailsViewModel>> GetTransactionDetails()
        {
            processId = Guid.NewGuid();

            try
            {
                return Ok(transactionDetailsRepository.GetAllTransactionDetails());
            }
            catch (Exception ex)
            {
                if (ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.GetTransactionDetails, null);
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        // GET: api/TransactionDetails/GetTransactionDetailsByUserId
        [HttpGet]
        [Authorize]
        [Route("GetTransactionDetailsByUserId")]
        public async Task<ActionResult<IEnumerable<TransactionDetailsViewModel>>> GetTransactionDetailsByUserId()
        {
            processId = Guid.NewGuid();
            var user = await GetAuthenticatedUser();

            try
            {
                return Ok(transactionDetailsRepository.GetTransactionDetailsByUserId(Guid.Parse(user.Value.UserId)));
            }
            catch (Exception ex)
            {
                if (ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.GetTransactionDetails, user.Value.UserName);
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        // GET: api/TransactionDetails/GetTransactionDetailsByDates
        [HttpGet]
        [Authorize]
        [Route("GetTransactionDetailsByDates/{startDate}/{EndDate}")]
        public async Task<ActionResult<IEnumerable<TransactionDetailsViewModel>>> GetTransactionDetailsByDates(DateTime startDate, DateTime endDate)
        {
            processId = Guid.NewGuid();
            var user = await GetAuthenticatedUser();

            try
            {
                return Ok(transactionDetailsRepository.GetTransactionDetailsByDates(startDate, endDate));
            }
            catch (Exception ex)
            {
                if (ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.GetTransactionDetails, user.Value.UserName);
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        // GET: api/TransactionDetails/GetTransactionDetailsByReferenceNo
        [HttpGet]
        [Authorize]
        [Route("GetTransactionDetailsByReferenceNo/{referenceNo}")]
        public async Task<ActionResult<IEnumerable<TransactionDetailsViewModel>>> GetTransactionDetailsByReferenceNo(string referenceNo)
        {
            processId = Guid.NewGuid();
            var user = await GetAuthenticatedUser();

            try
            {
                return Ok(transactionDetailsRepository.GetTransactionDetailsByReferenceNo(referenceNo));
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

        // POST: api/TransactionDetails
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Post([FromBody] TransactionDetailsViewModel model)
        {
            processId = Guid.NewGuid();
            var user = await GetAuthenticatedUser();

            try
            {
                model.UserId = user.Value.UserId;
                model.Alias = user.Value.Alias;
                model.ProcessId = processId.ToString();

                if (model.SubmittedBy != null && model.SubmittedBy != "")
                {
                    var subUser = userRepository.GetUserByAlias(model.SubmittedBy);

                    model.UserId = subUser.UserId;
                    model.Alias = subUser.Alias;
                }

                transactionDetailsRepository.AddTransactionDetails(model);
                if (transactionDetailsRepository.Commit())
                {
                    //PostTransactionLog(transactionId, user.Value.UserId, WebAPINamesConstants.PostTransactionDetails, Status.Success, user.Value.Email);
                    return Ok();
                }

                return BadRequest($"Failed to create restaurant");
            }
            catch (Exception ex)
            {
                if (ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.PostTransactionDetails, user.Value.EmailAddress);
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

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
