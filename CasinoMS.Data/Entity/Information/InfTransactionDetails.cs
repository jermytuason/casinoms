using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CasinoMS.Data.Entity.Information
{
    public class InfTransactionDetails
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Key, Required]
        public Guid TransactionId { get; set; }

        [Required, StringLength(10)]
        public string TransactionType { get; set; }
        [StringLength(30)]
        public string PlayerUserName { get; set; }
        [Required, StringLength(30)]
        public string ReferenceNo { get; set; }
        [Required, StringLength(30)]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Amount { get; set; }
        [StringLength(20)]
        public string SubmittedBy { get; set; }
        public DateTime SubmittedDate { get; set; }

        public Guid UserId { get; set; }
        public InfUser InfUser { get; set; }

        [Required]
        public Guid ProcessId { get; set; }
    }
}
