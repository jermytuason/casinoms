using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using CasinoMS.Core.Common;
using CasinoMS.Core.Constants;
using CasinoMS.Core.Model;
using CasinoMS.Data.Repositories.ErrorLogs;
using CasinoMS.Data.Repository.User;
using CasinoMS.Data.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace CasinoMS.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        #region Private Fields

        private readonly IUserRepository userRepository;
        private readonly IErrorLogsRepository errorLogsRepository;
        private readonly ApplicationSettingsModel appSettings;
        private string message = "";
        private Guid processId;

        #endregion

        #region Constructor

        public LoginController(IUserRepository userRepository, IErrorLogsRepository errorLogsRepository, IOptions<ApplicationSettingsModel> appSettings)
        {
            this.userRepository = userRepository;
            this.errorLogsRepository = errorLogsRepository;
            this.appSettings = appSettings.Value;
        }

        #endregion

        #region APIs

        // POST: /api/Login
        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            processId = Guid.NewGuid();

            try
            {
                var user = await userRepository.GetUserByUserName(model.UserName);

                if (user != null && await userRepository.IsPasswordValid(user, model.Password))
                {
                    var tokenDescriptor = new SecurityTokenDescriptor
                    {
                        Subject = new ClaimsIdentity(new Claim[]
                        {
                        new Claim("UserID", user.Id.ToString())
                        }),
                        Expires = DateTime.UtcNow.AddHours(8),
                        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(appSettings.JWT_Secret)),
                                                                        SecurityAlgorithms.HmacSha256Signature)
                    };
                    var tokenHandler = new JwtSecurityTokenHandler();
                    var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                    var token = tokenHandler.WriteToken(securityToken);
                    return Ok(new { token });
                }

                else return BadRequest(new { message = "Username or Password is incorrect." });
            }
            catch (Exception ex)
            {
                if (!ObjectHandler.IsObjectNull(ex.InnerException))
                {
                    message = ex.InnerException.Message;
                }

                PostError(processId, ex.Message, message, WebAPINamesConstants.Login, model.UserName);
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
