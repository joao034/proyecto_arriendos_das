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
    public class CalificacionesController : ControllerBase
    {
        private readonly ArriendosContext _context;

        public CalificacionesController(ArriendosContext context)
        {
            _context = context;
        }

        // GET: api/Calificaciones
        /// <summary>
        ///  Devuelve lista de calificaciones
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Calificaciones>>> GetCalificaciones()
        {
            return await _context.Calificaciones.ToListAsync();
        }

        // GET: api/Ciudads/5
        /// <summary>
        ///  Devuelve una ciudad por su id 
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<IEnumerable<Calificaciones>> GetCalificacionByIdArriendo(int id)
        {
            var calificaciones = await _context.Calificaciones.Where(calificaiones=>calificaiones.IdArr==id).ToListAsync();
            return calificaciones;
        }

        // POST: api/Ciudads
        /// <summary>
        ///  Inserta una nueva calificacion
        /// </summary>
        /// <returns></returns>
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Calificaciones>> PostCalificacion(Calificaciones calificaciones)
        {
            _context.Calificaciones.Add(calificaciones);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCalificaciones", new { id = calificaciones.Id }, calificaciones);
        }


        // DELETE: api/Calificaciones/5
        /// <summary>
        ///  Elimina una calificacion por el id
        /// </summary>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCalificacion(int id)
        {
            var calificacion = await _context.Calificaciones.FindAsync(id);
            if (calificacion == null)
            {
                return NotFound();
            }

            _context.Calificaciones.Remove(calificacion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // PUT: api/Calificaciones/5
        /// <summary>
        ///  Modifica una calificacion
        /// </summary>
        /// <returns></returns>
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCalificaciones(int id, Calificaciones calificaciones)
        {
            if (id != calificaciones.Id)
            {
                return BadRequest();
            }

            _context.Entry(calificaciones).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CalificacionesExists(id))
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
        private bool CalificacionesExists(int id)
        {
            return _context.Calificaciones.Any(e => e.Id == id);
        }
    }
}
