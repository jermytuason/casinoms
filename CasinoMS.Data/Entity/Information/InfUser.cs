using CasinoMS.Data.Entity.Definition;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CasinoMS.Data.Entity.Information
{
    public class InfUser
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Key, Required]
        public Guid UserId { get; set; }

        [Required, StringLength(20)]
        public string FirstName { get; set; }
        [Required, StringLength(20)]
        public string LastName { get; set; }
        [Required, StringLength(30)]
        public string Alias { get; set; }

        [StringLength(20)]
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }

        public Guid UserTypeId { get; set; }
        public DefUserType DefUserType { get; set; }

        public Guid TeamId { get; set; }
        public DefTeams DefTeams { get; set; }

        [Required]
        public Guid ProcessId { get; set; }

        [ForeignKey("UserId")]
        public ICollection<InfTransactionDetails> InfTransactionDetails { get; set; }
    }
}
