using CasinoMS.Data.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CasinoMS.Data.Repository.Team
{
    public class TeamRepository : ITeamRepository
    {
        #region Private Fields

        private readonly CasinoMSDBContext casinoMSDBContext;

        #endregion

        #region Constructor

        public TeamRepository(CasinoMSDBContext casinoMSDBContext)
        {
            this.casinoMSDBContext = casinoMSDBContext;
        }

        #endregion

        public IEnumerable<TeamViewModel> GetAllTeams()
        {
            var entity = casinoMSDBContext.def_teams.ToList();

            var model = new List<TeamViewModel>();

            if (entity != null)
            {
                foreach (var item in entity)
                {
                    var teamViewModel = new TeamViewModel();

                    teamViewModel.Id = item.Id;
                    teamViewModel.TeamId = item.TeamId;
                    teamViewModel.Description = item.Description;
                    teamViewModel.CreatedBy = item.CreatedBy;
                    teamViewModel.CreatedDate = item.CreatedDate;
                    teamViewModel.IsActive = item.IsActive;

                    model.Add(teamViewModel);
                }
            }

            return model;
        }

        public TeamViewModel GetTeamByDescription(string description)
        {
            var entity = casinoMSDBContext.def_teams.FirstOrDefault(x => x.Description == description);

            var teamViewModel = new TeamViewModel();

            if (entity != null)
            {
                teamViewModel.Id = entity.Id;
                teamViewModel.TeamId = entity.TeamId;
                teamViewModel.Description = entity.Description;
                teamViewModel.CreatedBy = entity.CreatedBy;
                teamViewModel.CreatedDate = entity.CreatedDate;
                teamViewModel.IsActive = entity.IsActive;
            }

            return teamViewModel;
        }

        public TeamViewModel GetTeamById(Guid teamId)
        {
            var entity = casinoMSDBContext.def_teams.FirstOrDefault(x => x.TeamId == teamId);

            var teamViewModel = new TeamViewModel();

            if (entity != null)
            {
                teamViewModel.Id = entity.Id;
                teamViewModel.TeamId = entity.TeamId;
                teamViewModel.Description = entity.Description;
                teamViewModel.CreatedBy = entity.CreatedBy;
                teamViewModel.CreatedDate = entity.CreatedDate;
                teamViewModel.IsActive = entity.IsActive;
            }

            return teamViewModel;
        }
    }
}
