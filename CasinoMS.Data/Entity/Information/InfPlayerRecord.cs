using CasinoMS.Data.Entity.Definition;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CasinoMS.Data.Entity.Information
{
    public class InfPlayerRecord
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Key, Required]
        public Guid PlayerRecordId { get; set; }

        [Required,StringLength(30)]
        public string PlayerUserName { get; set; }
        [StringLength(20)]
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }

        public Guid TeamId { get; set; }
        public DefTeams DefTeams { get; set; }

        [Required]
        public Guid ProcessId { get; set; }
    }
}
