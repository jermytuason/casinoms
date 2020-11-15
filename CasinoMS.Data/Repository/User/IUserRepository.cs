using CasinoMS.Data.Entities.Security;
using CasinoMS.Data.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CasinoMS.Data.Repository.User
{
    public interface IUserRepository
    {
        IEnumerable<UserViewModel> GetAllUsers();
        IEnumerable<UserViewModel> GetAllLoaderUsers();
        IEnumerable<UserViewModel> GetAllLoaderUsersByTeam(string teamName);
        UserViewModel GetUserByUserId(Guid id);
        UserViewModel GetUserByAlias(string alias);
        UserViewModel GetActiveUserByUserName(string userName);
        Task<ScrAccount> GetUserById(string id);
        Task<ScrAccount> GetUserByUserName(string userName);
        Task<object> AddAccountEntity(UserViewModel model);
        Task<bool> IsPasswordValid(ScrAccount account, string password);
        void AddUser(UserViewModel model, ScrAccount account);
        UserViewModel UpdateUserByUserName(string userName);
        void DeleteUser(Guid id);
        bool Commit();
    }
}
