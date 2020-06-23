using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class PlantDetailContext : DbContext
    {
        public PlantDetailContext(DbContextOptions<PlantDetailContext> options) : base(options)
        {

        }

        public DbSet<PlantDetail> PlantDetails { get; set; }
    }
}
