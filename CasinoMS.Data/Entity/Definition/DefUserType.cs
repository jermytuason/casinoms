using CasinoMS.Data.Entity.Information;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CasinoMS.Data.Entity.Definition
{
    public class DefUserType
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Key]
        [Required]
        public Guid UserTypeId { get; set; }

        [Required, StringLength(20)]
        public string Description { get; set; }
        [Required, StringLength(20)]
        public string CreatedBy { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        public bool IsActive { get; set; }

        [ForeignKey("UserTypeId")]
        public ICollection<InfUser> InfUser { get; set; }
    }
}
