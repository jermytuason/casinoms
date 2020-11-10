using CasinoMS.Data.Entity.Information;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CasinoMS.Data.Entity.Definition
{
    public class DefTeams
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Key]
        [Required]
        public Guid TeamId { get; set; }

        [Required, StringLength(20)]
        public string Description { get; set; }
        [Required, StringLength(20)]
        public string CreatedBy { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public bool IsActive { get; set; }

        [ForeignKey("TeamId")]
        public ICollection<InfUser> InfUser { get; set; }
    }
}
