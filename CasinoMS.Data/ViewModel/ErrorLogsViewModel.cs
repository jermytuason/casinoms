using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Data.ViewModel
{
    public class ErrorLogsViewModel
    {
        public int Id { get; set; }
        public Guid ProcessId { get; set; }
        public string Exception { get; set; }
        public string InnerException { get; set; }
        public string WebAPI { get; set; }
        public string ExecutedBy { get; set; }
        public DateTime ExecutedDate { get; set; }
    }
}
