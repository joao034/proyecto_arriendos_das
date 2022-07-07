using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Arriendos.Data;
using Arriendos.Models;

namespace api_arriendos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoArriendoesController : ControllerBase
    {
        private readonly ArriendosContext _context;

        public TipoArriendoesController(ArriendosContext context)
        {
            _context = context;
        }

        // GET: api/TipoArriendoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoArriendo>>> GetTipoArriendos()
        {
            return await _context.TipoArriendos.ToListAsync();
        }

        // GET: api/TipoArriendoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoArriendo>> GetTipoArriendo(int id)
        {
            var tipoArriendo = await _context.TipoArriendos.FindAsync(id);

            if (tipoArriendo == null)
            {
                return NotFound();
            }

            return tipoArriendo;
        }

        // PUT: api/TipoArriendoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoArriendo(int id, TipoArriendo tipoArriendo)
        {
            if (id != tipoArriendo.IdTipArr)
            {
                return BadRequest();
            }

            _context.Entry(tipoArriendo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoArriendoExists(id))
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

        // POST: api/TipoArriendoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TipoArriendo>> PostTipoArriendo(TipoArriendo tipoArriendo)
        {
            _context.TipoArriendos.Add(tipoArriendo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoArriendo", new { id = tipoArriendo.IdTipArr }, tipoArriendo);
        }

        // DELETE: api/TipoArriendoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTipoArriendo(int id)
        {
            var tipoArriendo = await _context.TipoArriendos.FindAsync(id);
            if (tipoArriendo == null)
            {
                return NotFound();
            }

            _context.TipoArriendos.Remove(tipoArriendo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TipoArriendoExists(int id)
        {
            return _context.TipoArriendos.Any(e => e.IdTipArr == id);
        }
    }
}
