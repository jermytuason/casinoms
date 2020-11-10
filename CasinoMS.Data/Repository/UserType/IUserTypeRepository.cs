using CasinoMS.Data.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Data.Repository.UserType
{
    public interface IUserTypeRepository
    {
        IEnumerable<UserTypeViewModel> GetAllUserType();
        UserTypeViewModel GetUserTypeById(Guid userTypeId);
        UserTypeViewModel GetUserTypeByDescription(string description);
    }
}
