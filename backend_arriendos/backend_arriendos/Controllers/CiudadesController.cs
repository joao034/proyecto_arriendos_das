using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Arriendos.Data;
using Arriendos.Models;

namespace backend_arriendos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CiudadesController : ControllerBase
    {
        private readonly ArriendosContext _context;

        public CiudadesController(ArriendosContext context)
        {
            _context = context;
        }

        // GET: api/Ciudades
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ciudade>>> GetCiudades()
        {
            return await _context.Ciudades.ToListAsync();
        }

        // GET: api/Ciudades/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ciudade>> GetCiudade(int id)
        {
            var ciudade = await _context.Ciudades.FindAsync(id);

            if (ciudade == null)
            {
                return NotFound();
            }

            return ciudade;
        }

        // PUT: api/Ciudades/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCiudade(int id, Ciudade ciudade)
        {
            if (id != ciudade.IdCiu)
            {
                return BadRequest();
            }

            _context.Entry(ciudade).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CiudadeExists(id))
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

        // POST: api/Ciudades
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Ciudade>> PostCiudade(Ciudade ciudade)
        {
            _context.Ciudades.Add(ciudade);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCiudade", new { id = ciudade.IdCiu }, ciudade);
        }

        // DELETE: api/Ciudades/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCiudade(int id)
        {
            var ciudade = await _context.Ciudades.FindAsync(id);
            if (ciudade == null)
            {
                return NotFound();
            }

            _context.Ciudades.Remove(ciudade);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CiudadeExists(int id)
        {
            return _context.Ciudades.Any(e => e.IdCiu == id);
        }
    }
}
