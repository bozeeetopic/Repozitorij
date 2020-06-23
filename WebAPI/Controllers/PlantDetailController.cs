using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlantDetailController : ControllerBase
    {
        private readonly PlantDetailContext _context;

        public PlantDetailController(PlantDetailContext context)
        {
            _context = context;
        }

        // GET: api/PlantDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PlantDetail>>> GetPlantDetails()
        {
            return await _context.PlantDetails.ToListAsync();
        }

        // GET: api/PlantDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PlantDetail>> GetPlantDetail(int id)
        {
            var plantDetail = await _context.PlantDetails.FindAsync(id);

            if (plantDetail == null)
            {
                return NotFound();
            }

            return plantDetail;
        }

        // PUT: api/PlantDetail/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlantDetail(int id, PlantDetail plantDetail)
        {
            if (id != plantDetail.PMid)
            {
                return BadRequest();
            }

            _context.Entry(plantDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlantDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PlantDetail
        [HttpPost]
        public async Task<ActionResult<PlantDetail>> PostPlantDetail(PlantDetail plantDetail)
        {
            _context.PlantDetails.Add(plantDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPlantDetail", new { id = plantDetail.PMid }, plantDetail);
        }

        // DELETE: api/PlantDetail/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PlantDetail>> DeletePlantDetail(int id)
        {
            var plantDetail = await _context.PlantDetails.FindAsync(id);
            if (plantDetail == null)
            {
                return NotFound();
            }

            _context.PlantDetails.Remove(plantDetail);
            await _context.SaveChangesAsync();

            return plantDetail;
        }

        private bool PlantDetailExists(int id)
        {
            return _context.PlantDetails.Any(e => e.PMid == id);
        }
    }
}
