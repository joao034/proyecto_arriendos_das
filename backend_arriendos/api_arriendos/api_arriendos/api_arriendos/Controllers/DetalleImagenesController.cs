using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Arriendos.Data;
using Arriendos.Models;
using System.IO;
using System.Net.Http.Headers;

namespace api_arriendos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DetalleImagenesController : ControllerBase
    {
        private readonly ArriendosContext _context;

        public DetalleImagenesController(ArriendosContext context)
        {
            _context = context;
        }

        // GET: api/DetalleImagenes
        /// <summary>
        ///  Devuelve la lista detalle de imagenes
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DetalleImagenes>>> GetDetalleImagenes()
        {
            return await _context.DetalleImagenes.ToListAsync();
        }

        // GET: api/DetalleImagenes/5
        /// <summary>
        ///  Devuelve un detalle de imagen por su id
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<DetalleImagenes>> GetDetalleImagenes(int id)
        {
            var detalleImagenes = await _context.DetalleImagenes.FindAsync(id);

            if (detalleImagenes == null)
            {
                return NotFound();
            }

            return detalleImagenes;
        }

        // PUT: api/DetalleImagenes/5
        /// <summary>
        ///  Modifica un detalle de imagen
        /// </summary>
        /// <returns></returns>
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDetalleImagenes(int id, DetalleImagenes detalleImagenes)
        {
            if (id != detalleImagenes.Id)
            {
                return BadRequest();
            }

            _context.Entry(detalleImagenes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DetalleImagenesExists(id))
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

        // POST: api/DetalleImagenes
        /// <summary>
        ///  Inserta un nuevo detalle de imagen 
        /// </summary>
        /// <returns></returns>
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DetalleImagenes>> PostDetalleImagenes(DetalleImagenes detalleImagenes)
        {
            _context.DetalleImagenes.Add(detalleImagenes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDetalleImagenes", new { id = detalleImagenes.Id }, detalleImagenes);
        }

        /// <summary>
        ///  Elimina un detalle de imagen por el id
        /// </summary>
        /// <returns></returns>
        // DELETE: api/DetalleImagenes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDetalleImagenes(int id)
        {
            var detalleImagenes = await _context.DetalleImagenes.FindAsync(id);
            if (detalleImagenes == null)
            {
                return NotFound();
            }

            _context.DetalleImagenes.Remove(detalleImagenes);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DetalleImagenesExists(int id)
        {
            return _context.DetalleImagenes.Any(e => e.Id == id);
        }

        /// <summary>
        ///  Metodo para subir una imagen
        /// </summary>
        /// <returns></returns>
        [HttpPost("upload"), DisableRequestSizeLimit]
        public IActionResult Upload()
        {
            try
            {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("Resources", "Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    return Ok(new { dbPath });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
        }
    }
}
