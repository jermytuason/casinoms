using CasinoMS.Data.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Data.Repository.Team
{
    public interface ITeamRepository
    {
        IEnumerable<TeamViewModel> GetAllTeams();
        TeamViewModel GetTeamById(Guid teamId);
        TeamViewModel GetTeamByDescription(string description);
    }
}
