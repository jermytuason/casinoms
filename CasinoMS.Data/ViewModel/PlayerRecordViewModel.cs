using CasinoMS.Data.Entity.Definition;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace CasinoMS.Data.ViewModel
{
    public class PlayerRecordViewModel
    {
        public int Id { get; set; }
        public Guid PlayerRecordId { get; set; }

        [Required, StringLength(30)]
        public string PlayerUserName { get; set; }
        [StringLength(20)]
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }

        public Guid TeamId { get; set; }

        [Required]
        public Guid ProcessId { get; set; }
    }
}
