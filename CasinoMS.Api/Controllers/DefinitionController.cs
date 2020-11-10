using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CasinoMS.Core.Common;
using CasinoMS.Core.Constants;
using CasinoMS.Data.Repositories.ErrorLogs;
using CasinoMS.Data.Repository.Team;
using CasinoMS.Data.Repository.User;
using CasinoMS.Data.Repository.UserType;
using CasinoMS.Data.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CasinoMS.Api.Controllers
{
    [Route("api/[controller]/[action]/{id?}")]
    [ApiController]
    public class DefinitionController : ControllerBase
    {
        #region Private Fields

        private readonly IUserTypeRepository userTypeRepository;
        private readonly ITeamRepository teamRepository;
        private readonly IErrorLogsRepository errorLogsRepository;
        private string message = "";
        private Guid processId;

        #endregion

        #region Constructor

        public DefinitionController(IUserTypeRepository userTypeRepository, ITeamRepository teamRepository, IErrorLogsRepository errorLogsRepository)
        {
            this.userTypeRepository = userTypeRepository;
            this.teamRepository = teamRepository;
            this.errorLogsRepository = errorLogsRepository;
        }

        #endregion

        #region API

        // GET: api/Definition/GetUserTypes
        [HttpGet]
        public ActionResult<IEnumerable<UserTypeViewModel>> GetUserTypes()
        {
            processId = Guid.NewGuid();

            try
            {
                return Ok(userTypeRepository.GetAllUserType());
            }
            catch (Exception ex)
            {
                if (ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.GetUserTypes, null);
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        // GET: api/Definition/GetUserTypeById/id
        [HttpGet]
        public ActionResult<UserTypeViewModel> GetUserTypeById(Guid id)
        {
            processId = Guid.NewGuid();

            try
            {
                return Ok(userTypeRepository.GetUserTypeById(id));
            }
            catch (Exception ex)
            {
                if (ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.GetUserTypeById, null);
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        // GET: api/Definition/GetUserTypeByDescription/description
        [HttpGet]
        public ActionResult<UserTypeViewModel> GetUserTypeByDescription(string id)
        {
            processId = Guid.NewGuid();

            try
            {
                return Ok(userTypeRepository.GetUserTypeByDescription(id));
            }
            catch (Exception ex)
            {
                if (ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.GetUserTypeByDescription, null);
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        // GET: api/Definition/GetTeams
        [HttpGet]
        public ActionResult<IEnumerable<TeamViewModel>> GetTeams()
        {
            processId = Guid.NewGuid();

            try
            {
                return Ok(teamRepository.GetAllTeams());
            }
            catch (Exception ex)
            {
                if (ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.GetAllTeams, null);
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        // GET: api/Definition/GetTeamById/id
        [HttpGet]
        public ActionResult<TeamViewModel> GetTeamById(Guid id)
        {
            processId = Guid.NewGuid();

            try
            {
                return Ok(teamRepository.GetTeamById(id));
            }
            catch (Exception ex)
            {
                if (ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.GetTeamById, null);
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        // GET: api/Definition/GetTeamByDescription/description
        [HttpGet]
        public ActionResult<TeamViewModel> GetTeamByDescription(string id)
        {
            processId = Guid.NewGuid();

            try
            {
                return Ok(teamRepository.GetTeamByDescription(id));
            }
            catch (Exception ex)
            {
                if (ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.GetTeamByDescription, null);
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        #endregion

        #region Private Methods

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
