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
    public class ArriendosController : ControllerBase
    {
        private readonly ArriendosContext _context;

        public ArriendosController(ArriendosContext context)
        {
            _context = context;
        }

        // GET: api/Arriendos, obtiene la lista de arriendos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Arriendo>>> GetArriendos()
        {
            return await _context.Arriendos.ToListAsync();
        }

        // GET: api/Arriendos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Arriendo>> GetArriendo(int id)
        {
            var arriendo = await _context.Arriendos.FindAsync(id);

            if (arriendo == null)
            {
                return NotFound();
            }

            return arriendo;
        }

        // PUT: api/Arriendos/1
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        /*[HttpPut("{id}")]
        public async Task<IActionResult> PutArriendo(int id, Arriendo arriendo)
        {
            if (id != arriendo.IdArr)
            {
                return BadRequest();
            }

            _context.Entry(arriendo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArriendoExists(id))
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

        // POST: api/Arriendos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Arriendo>> PostArriendo(Arriendo arriendo)
        {
            _context.Arriendos.Add(arriendo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetArriendo", new { id = arriendo.IdArr }, arriendo);
        }

        // DELETE: api/Arriendos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArriendo(int id)
        {
            var arriendo = await _context.Arriendos.FindAsync(id);
            if (arriendo == null)
            {
                return NotFound();
            }

            _context.Arriendos.Remove(arriendo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ArriendoExists(int id)
        {
            return _context.Arriendos.Any(e => e.IdArr == id);
        }*/
    }
}
