using CasinoMS.Core.Common;
using CasinoMS.Core.Constants;
using CasinoMS.Data.Entities.Security;
using CasinoMS.Data.Entity.Definition;
using CasinoMS.Data.Entity.Information;
using CasinoMS.Data.ViewModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CasinoMS.Data.Repository.User
{
    public class UserRepository : IUserRepository
    {
        #region Private Fields

        private readonly CasinoMSDBContext casinoMSDBContext;
        private readonly UserManager<ScrAccount> userManager;

        #endregion

        #region Constructor

        public UserRepository(CasinoMSDBContext casinoMSDBContext, UserManager<ScrAccount> userManager)
        {
            this.casinoMSDBContext = casinoMSDBContext;
            this.userManager = userManager;
        }

        #endregion

        public IEnumerable<UserViewModel> GetAllUsers()
        {
            var entities = casinoMSDBContext.inf_user
                                            .Include(x => x.DefTeams)
                                            .Include(x => x.DefUserType).ToList();

            var model = new List<UserViewModel>();

            if (entities != null)
            {
                foreach (var item in entities)
                {
                    var account = casinoMSDBContext.scr_account.FirstOrDefault(x => x.UserId == item.UserId);

                    var userViewModel = new UserViewModel();
                    userViewModel.FirstName = item.FirstName;
                    userViewModel.LastName = item.LastName;
                    userViewModel.FullName = DataHandler.GetFullName(item.FirstName, item.LastName);
                    userViewModel.Alias = item.Alias;
                    userViewModel.TeamName = item.DefTeams.Description;
                    userViewModel.EmailAddress = account.Email;
                    userViewModel.UserName = account.UserName;
                    userViewModel.UserType = item.DefUserType.Description;
                    userViewModel.UserId = item.UserId.ToString();

                    model.Add(userViewModel);
                }
            }

            return model;
        }

        public IEnumerable<UserViewModel> GetAllLoaderUsers()
        {
            var entities = casinoMSDBContext.inf_user
                                            .Include(x => x.DefTeams)
                                            .Include(x => x.DefUserType)
                                            .Where(x => x.DefUserType.Description == UserTypeConstants.Loader)
                                            .ToList();

            var model = new List<UserViewModel>();

            if (entities != null)
            {
                foreach (var item in entities)
                {
                    var account = casinoMSDBContext.scr_account.FirstOrDefault(x => x.UserId == item.UserId);

                    var userViewModel = new UserViewModel();
                    userViewModel.FirstName = item.FirstName;
                    userViewModel.LastName = item.LastName;
                    userViewModel.FullName = DataHandler.GetFullName(item.FirstName, item.LastName);
                    userViewModel.Alias = item.Alias;
                    userViewModel.TeamName = item.DefTeams.Description;
                    userViewModel.EmailAddress = account.Email;
                    userViewModel.UserName = account.UserName;
                    userViewModel.UserType = item.DefUserType.Description;
                    userViewModel.UserId = item.UserId.ToString();

                    model.Add(userViewModel);
                }
            }

            return model;
        }

        public IEnumerable<UserViewModel> GetAllLoaderUsersByTeam(string teamName)
        {
            var entities = casinoMSDBContext.inf_user
                                          .Include(x => x.DefTeams)
                                          .Include(x => x.DefUserType)
                                          .Where(x => x.DefUserType.Description == UserTypeConstants.Loader && x.DefTeams.Description == teamName)
                                          .OrderBy(x => x.Alias)
                                          .ToList();

            var model = new List<UserViewModel>();

            if (entities != null)
            {
                foreach (var item in entities)
                {
                    var account = casinoMSDBContext.scr_account.FirstOrDefault(x => x.UserId == item.UserId);

                    var userViewModel = new UserViewModel();
                    userViewModel.FirstName = item.FirstName;
                    userViewModel.LastName = item.LastName;
                    userViewModel.FullName = DataHandler.GetFullName(item.FirstName, item.LastName);
                    userViewModel.Alias = item.Alias;
                    userViewModel.TeamName = item.DefTeams.Description;
                    userViewModel.EmailAddress = account.Email;
                    userViewModel.UserName = account.UserName;
                    userViewModel.UserType = item.DefUserType.Description;
                    userViewModel.UserId = item.UserId.ToString();

                    model.Add(userViewModel);
                }
            }

            return model;
        }

        public UserViewModel GetUserByUserId(Guid id)
        {
            var entity = casinoMSDBContext.inf_user
                                          .Include(x => x.DefTeams)
                                          .Include(x => x.DefUserType)
                                          .Where(x => x.UserId == id)
                                          .FirstOrDefault();

            var account = casinoMSDBContext.scr_account.FirstOrDefault(x => x.UserId == id);

            var userViewModel = new UserViewModel();

            if (entity != null)
            {
                userViewModel.FirstName = entity.FirstName;
                userViewModel.LastName = entity.LastName;
                userViewModel.FullName = DataHandler.GetFullName(entity.FirstName, entity.LastName);
                userViewModel.Alias = entity.Alias;
                userViewModel.TeamName = entity.DefTeams.Description;
                userViewModel.EmailAddress = account.Email;
                userViewModel.UserName = account.UserName;
                userViewModel.UserType = entity.DefUserType.Description;
                userViewModel.UserId = entity.UserId.ToString();
            }

            return userViewModel;
        }

        public UserViewModel GetUserByAlias(string alias)
        {
            var entity = casinoMSDBContext.inf_user
                                          .Include(x => x.DefTeams)
                                          .Include(x => x.DefUserType)
                                          .Where(x => x.Alias == alias)
                                          .FirstOrDefault();

            var account = casinoMSDBContext.scr_account.FirstOrDefault(x => x.UserId == entity.UserId);

            var userViewModel = new UserViewModel();

            if (entity != null)
            {
                userViewModel.FirstName = entity.FirstName;
                userViewModel.LastName = entity.LastName;
                userViewModel.FullName = DataHandler.GetFullName(entity.FirstName, entity.LastName);
                userViewModel.Alias = entity.Alias;
                userViewModel.TeamName = entity.DefTeams.Description;
                userViewModel.EmailAddress = account.Email;
                userViewModel.UserName = account.UserName;
                userViewModel.UserType = entity.DefUserType.Description;
                userViewModel.UserId = entity.UserId.ToString();
            }

            return userViewModel;
        }

        public UserViewModel GetActiveUserByUserName(string userName)
        {
            var account = casinoMSDBContext.scr_account.FirstOrDefault(x => x.UserName == userName);

            var userViewModel = new UserViewModel();

            if (account != null)
            {
                var entity = casinoMSDBContext.inf_user
                                              .Include(x => x.DefTeams)
                                              .Include(x => x.DefUserType)
                                              .Where(x => x.UserId == account.UserId)
                                              .FirstOrDefault();

                userViewModel.FirstName = entity.FirstName;
                userViewModel.LastName = entity.LastName;
                userViewModel.FullName = DataHandler.GetFullName(entity.FirstName, entity.LastName);
                userViewModel.Alias = entity.Alias;
                userViewModel.TeamName = entity.DefTeams.Description;
                userViewModel.EmailAddress = account.Email;
                userViewModel.UserName = account.UserName;
                userViewModel.UserType = entity.DefUserType.Description;
                userViewModel.UserId = entity.UserId.ToString();
                userViewModel.IsActive = account.IsActive;
            }

            return userViewModel;
        }

        public async Task<ScrAccount> GetUserById(string id)
        {
            return await userManager.FindByIdAsync(id);
        }

        public async Task<ScrAccount> GetUserByUserName(string userName)
        {
            return await userManager.FindByNameAsync(userName);
        }

        public async Task<object> AddAccountEntity(UserViewModel model)
        {
            var account = new ScrAccount();
            account.Email = model.EmailAddress;
            account.UserName = model.UserName.ToLower().Trim();
            account.UserId = Guid.NewGuid();
            account.CreatedBy = DataHandler.GetFullName(model.FirstName, model.LastName);
            account.CreatedDate = DateTime.UtcNow.AddHours(8);
            account.IsActive = false;

            var result = await userManager.CreateAsync(account, model.Password);

            if (result.Succeeded)
            {
                AddUser(model, account);
            }

            return result;
        }

        public void AddUser(UserViewModel model, ScrAccount account)
        {
            var userType = casinoMSDBContext.def_user_type.FirstOrDefault(x => x.Description == model.UserType);
            var team = casinoMSDBContext.def_teams.FirstOrDefault(x => x.Description == model.TeamName);

            var user = new InfUser();
            user.UserId = account.UserId;
            user.FirstName = model.FirstName;
            user.LastName = model.LastName;
            user.Alias = model.Alias;
            user.CreatedBy = account.CreatedBy;
            user.CreatedDate = account.CreatedDate;
            user.UserTypeId = userType.UserTypeId;
            user.TeamId = team.TeamId;

            casinoMSDBContext.Add(user);
        }

        public UserViewModel UpdateUserByUserName(string userName)
        {
            var account = casinoMSDBContext.scr_account.FirstOrDefault(x => x.UserName == userName);
            account.IsActive = true;

            var userViewModel = new UserViewModel();

            if (account != null)
            {
                var entity = casinoMSDBContext.inf_user
                                              .Include(x => x.DefTeams)
                                              .Include(x => x.DefUserType)
                                              .Where(x => x.UserId == account.UserId)
                                              .FirstOrDefault();

                userViewModel.FirstName = entity.FirstName;
                userViewModel.LastName = entity.LastName;
                userViewModel.FullName = DataHandler.GetFullName(entity.FirstName, entity.LastName);
                userViewModel.Alias = entity.Alias;
                userViewModel.TeamName = entity.DefTeams.Description;
                userViewModel.EmailAddress = account.Email;
                userViewModel.UserName = account.UserName;
                userViewModel.UserType = entity.DefUserType.Description;
                userViewModel.UserId = entity.UserId.ToString();
                userViewModel.IsActive = account.IsActive;
            }

            return userViewModel;
        }

        public void DeleteUser(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> IsPasswordValid(ScrAccount account, string password)
        {
            return await userManager.CheckPasswordAsync(account, password);
        }

        public bool Commit()
        {
            return casinoMSDBContext.SaveChanges() > 0;
        }
    }
}
