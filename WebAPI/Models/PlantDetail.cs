using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class PlantDetail
    {
       [Key]
        public int PMid { get; set; }
        [Required]
        [Column(TypeName = "varchar(30)")]
        public string PlantName { get; set; }
        [Required]
        public int Mintemp { get; set; }
        [Required]
        public int Maxtemp { get; set; }
        [Required]
        public int Maxwater { get; set; }
        [Required]
        public int Minwater { get; set; }
    }
}
