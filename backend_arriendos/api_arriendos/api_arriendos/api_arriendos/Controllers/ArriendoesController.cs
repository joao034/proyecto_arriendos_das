﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Arriendos.Data;
using Arriendos.Models;
using api_arriendos.Models;

namespace api_arriendos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArriendoesController : ControllerBase
    {
        private readonly ArriendosContext _context;

        public ArriendoesController(ArriendosContext context)
        {
            _context = context;
        }

        // GET: api/Arriendoes
        /// <summary>
        /// Retorna la lista de arriendos
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Arriendo>>> GetArriendos()
        {
            return await _context.Arriendos.ToListAsync();
        }

        // GET: api/Arriendoes/5
        /// <summary>
        /// Retorna un arriendo por su id 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
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

        // PUT: api/Arriendoes/5
        /// <summary>
        /// Modifica un arriendo
        /// </summary>
        /// <returns></returns>
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
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

        // POST: api/Arriendoes
        /// <summary>
        /// Inserta un nuevo arriendo
        /// </summary>
        /// <returns></returns>
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //Agregar detallem 
        [HttpPost]
        public async Task<ActionResult<Arriendo>> PostArriendo(Arriendo arriendo )
        {
            _context.Arriendos.Add(arriendo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetArriendo", new { id = arriendo.IdArr }, arriendo);
        }

        // DELETE: api/Arriendoes/5
        /// <summary>
        ///  Elimina un arriendo por el id
        /// </summary>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArriendo(int id)
        {
            var arriendo = await _context.Arriendos.FindAsync(id);
            if (arriendo == null)
            {
                return NotFound();
            }

            var imagen = await _context.DetalleImagenes.Where( imagen => (imagen.IdArr.Equals(arriendo.IdArr))).FirstOrDefaultAsync();
            _context.DetalleImagenes.Remove(imagen);
            await _context.SaveChangesAsync();

            _context.Arriendos.Remove(arriendo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ArriendoExists(int id)
        {
            return _context.Arriendos.Any(e => e.IdArr == id);
        }
    }
}
