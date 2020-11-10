using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace CasinoMS.Data.ViewModel
{
    public class TransactionDetailsViewModel
    {
        public string Id { get; set; }
        public string TransactionId { get; set; }

        [Required, StringLength(10)]
        public string TransactionType { get; set; }
        [StringLength(30)]
        public string PlayerUserName { get; set; }
        [Required, StringLength(30)]
        public string ReferenceNo { get; set; }
        [Required]
        public decimal Amount { get; set; }
        [StringLength(20)]
        public string SubmittedBy { get; set; }
        public string SubmittedDate { get; set; }

        public string FullName { get; set; }
        public string Alias { get; set; }

        public string UserId { get; set; }
        public string ProcessId { get; set; }
    }
}
