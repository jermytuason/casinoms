using CasinoMS.Data.Entity.Information;
using CasinoMS.Data.ViewModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CasinoMS.Data.Repository.PlayerRecord
{
    public class PlayerRecordRepository : IPlayerRecordRepository
    {
        #region Private Fields

        private readonly CasinoMSDBContext casinoMSDBContext;

        #endregion

        #region Constructor

        public PlayerRecordRepository(CasinoMSDBContext casinoMSDBContext)
        {
            this.casinoMSDBContext = casinoMSDBContext;
        }

        #endregion

        public IEnumerable<PlayerRecordViewModel> GetAllPlayerRecords(string teamName)
        {
            var entities = casinoMSDBContext.inf_player_record
                                            .Include(x => x.DefTeams)
                                            .Where(x => x.DefTeams.Description == teamName)
                                            .ToList();

            var playerRecordViewModelList = new List<PlayerRecordViewModel>();

            foreach (var item in entities)
            {
                var playerRecordViewModel = new PlayerRecordViewModel();

                playerRecordViewModel.Id = item.Id;
                playerRecordViewModel.PlayerRecordId = item.PlayerRecordId;
                playerRecordViewModel.PlayerUserName = item.PlayerUserName;
                playerRecordViewModel.CreatedBy = item.CreatedBy;
                playerRecordViewModel.CreatedDate = item.CreatedDate;
                playerRecordViewModel.TeamId = item.TeamId;
                playerRecordViewModel.ProcessId = item.ProcessId;

                playerRecordViewModelList.Add(playerRecordViewModel);
            }

            return playerRecordViewModelList;
        }

        public PlayerRecordViewModel GetPlayerRecordByPlayerUserName(string playerUserName)
        {
            var entity = casinoMSDBContext.inf_player_record
                                          .Include(x => x.DefTeams)
                                          .FirstOrDefault(x => x.PlayerUserName.StartsWith(playerUserName));
            var model = new PlayerRecordViewModel();

            if (entity != null)
            {
                model.Id = entity.Id;
                model.PlayerRecordId = entity.PlayerRecordId;
                model.PlayerUserName = entity.PlayerUserName;
                model.CreatedBy = entity.CreatedBy;
                model.CreatedDate = entity.CreatedDate;
                model.TeamId = entity.TeamId;
                model.ProcessId = entity.ProcessId;
            }

            return model;
        }
        public void AddPlayerRecord(PlayerRecordViewModel model)
        {
            var entity = new InfPlayerRecord();
            entity.PlayerUserName = model.PlayerUserName;
            entity.CreatedBy = model.CreatedBy;
            entity.CreatedDate = DateTime.UtcNow.AddHours(8);
            entity.TeamId = model.TeamId;
            entity.ProcessId = model.ProcessId;

            casinoMSDBContext.Add(entity);
        }

        public void DeletePlayerRecord(Guid playerRecordId)
        {
            throw new NotImplementedException();
        }

        public bool Commit()
        {
            return casinoMSDBContext.SaveChanges() > 0;
        }
    }
}
