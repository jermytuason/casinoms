using System;
using System.Collections.Generic;
using System.Text;

namespace CasinoMS.Data.ViewModel
{
    public class UserTypeViewModel
    {
        public int Id { get; set; }
        public Guid UserTypeId { get; set; }
        public string Description { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool IsActive { get; set; }
    }
}
