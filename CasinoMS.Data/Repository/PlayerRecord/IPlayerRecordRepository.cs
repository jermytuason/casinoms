using CasinoMS.Data.ViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Data.Repository.PlayerRecord
{
    public interface IPlayerRecordRepository
    {
        IEnumerable<PlayerRecordViewModel> GetAllPlayerRecords(string teamName);
        PlayerRecordViewModel GetPlayerRecordByPlayerUserName(string playerUserName);
        void AddPlayerRecord(PlayerRecordViewModel model);
        void DeletePlayerRecord(Guid playerRecordId);
        bool Commit();
    }
}
