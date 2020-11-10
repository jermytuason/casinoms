using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CasinoMS.Data.Entity.Information
{
    public class InfErrorLogs
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public Guid ProcessId { get; set; }
        [Required, StringLength(250)]
        public string Exception { get; set; }
        [StringLength(250)]
        public string InnerException { get; set; }
        [Required, StringLength(250)]
        public string WebAPI { get; set; }
        [StringLength(20)]
        public string ExecutedBy { get; set; }
        [Required]
        public DateTime ExecutedDate { get; set; }
    }
}
