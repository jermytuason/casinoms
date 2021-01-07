using CasinoMS.Data.Entities.Security;
using CasinoMS.Data.Entity.Definition;
using CasinoMS.Data.Entity.Information;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Data
{
    public class CasinoMSDBContext : IdentityDbContext
    {
        #region Constructor

        public CasinoMSDBContext(DbContextOptions<CasinoMSDBContext> options) : base(options)
        {

        }

        #endregion

        #region Information Tables

        public DbSet<InfUser> inf_user { get; set; }
        public DbSet<InfErrorLogs> inf_error_logs { get; set; }
        public DbSet<InfTransactionDetails> inf_transaction_details { get; set; }
        public DbSet<InfPlayerRecord> inf_player_record { get; set; }

        #endregion

        #region Definition Tables

        public DbSet<DefUserType> def_user_type { get; set; }
        public DbSet<DefTeams> def_teams { get; set; }

        #endregion

        #region Security Tables

        public DbSet<ScrAccount> scr_account { get; set; }

        #endregion
    }
}
