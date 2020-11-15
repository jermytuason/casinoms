using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace CasinoMS.Data.ViewModel
{
    public class UserViewModel : IdentityUser
    {
        [Required, StringLength(20)]
        public string FirstName { get; set; }
        [Required, StringLength(20)]
        public string LastName { get; set; }
        public string FullName { get; set; }
        [Required, StringLength(30)]
        public string Alias { get; set; }
        [Required, StringLength(30)]
        public string TeamName { get; set; }
        [Required, StringLength(30)]
        public string EmailAddress { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string UserType { get; set; }
        public string UserId { get; set; }
        public bool IsActive { get; set; }
    }
}
