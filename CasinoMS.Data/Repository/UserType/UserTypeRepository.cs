using CasinoMS.Data.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CasinoMS.Data.Repository.UserType
{
    public class UserTypeRepository : IUserTypeRepository
    {
        #region Private Fields

        private readonly CasinoMSDBContext casinoMSDBContext;

        #endregion

        #region Constructor

        public UserTypeRepository(CasinoMSDBContext casinoMSDBContext)
        {
            this.casinoMSDBContext = casinoMSDBContext;
        }

        #endregion

        public IEnumerable<UserTypeViewModel> GetAllUserType()
        {
            var entities = casinoMSDBContext.def_user_type.ToList();

            var model = new List<UserTypeViewModel>();

            if (entities != null)
            {
                foreach (var item in entities)
                {
                    var userTypeViewModel = new UserTypeViewModel();

                    userTypeViewModel.Id = item.Id;
                    userTypeViewModel.UserTypeId = item.UserTypeId;
                    userTypeViewModel.Description = item.Description;
                    userTypeViewModel.CreatedBy = item.CreatedBy;
                    userTypeViewModel.CreatedDate = item.CreatedDate;
                    userTypeViewModel.IsActive = item.IsActive;

                    model.Add(userTypeViewModel);
                }
            }

            return model;
        }

        public UserTypeViewModel GetUserTypeByDescription(string description)
        {
            var entity = casinoMSDBContext.def_user_type.FirstOrDefault(x => x.Description == description);

            var userTypeViewModel = new UserTypeViewModel();

            if (entity != null)
            {
                userTypeViewModel.Id = entity.Id;
                userTypeViewModel.UserTypeId = entity.UserTypeId;
                userTypeViewModel.Description = entity.Description;
                userTypeViewModel.CreatedBy = entity.CreatedBy;
                userTypeViewModel.CreatedDate = entity.CreatedDate;
                userTypeViewModel.IsActive = entity.IsActive;
            }

            return userTypeViewModel;
        }

        public UserTypeViewModel GetUserTypeById(Guid userTypeId)
        {
            var entity = casinoMSDBContext.def_user_type.FirstOrDefault(x => x.UserTypeId == userTypeId);

            var userTypeViewModel = new UserTypeViewModel();

            if (entity != null)
            {
                userTypeViewModel.Id = entity.Id;
                userTypeViewModel.UserTypeId = entity.UserTypeId;
                userTypeViewModel.Description = entity.Description;
                userTypeViewModel.CreatedBy = entity.CreatedBy;
                userTypeViewModel.CreatedDate = entity.CreatedDate;
                userTypeViewModel.IsActive = entity.IsActive;
            }

            return userTypeViewModel;
        }
    }
}
