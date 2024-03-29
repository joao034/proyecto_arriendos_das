﻿using Arriendos.Data;
using Arriendos.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_arriendos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Favoritos : ControllerBase
    {
        private readonly ArriendosContext _context;

        public Favoritos(ArriendosContext context)
        {
            _context = context;
        }

        // GET: api/Favoritos
        /// <summary>
        ///  Devuelve lista de arrienodos en favorito
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MisFavorito>>> GetFavoritos()
        {
            return await _context.MisFavoritos.ToListAsync();
        }

        // GET: api/Favoritos/5
        /// <summary>
        ///  Devuelve un favorito por su id 
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<MisFavorito>> GetFavorito(int id)
        {
            var favorito = await _context.MisFavoritos.FindAsync(id);

            if (favorito == null)
            {
                return NotFound();
            }

            return favorito;
        }

        // GET: api/Favoritos/idUsuario/1
        /// <summary>
        ///  Devuelve la lista de favoritos de un usuario
        /// </summary>
        /// <returns></returns>
        [HttpGet("idUsuario/{id}")]
        public async Task<ActionResult<IEnumerable<MisFavorito>>> GetFavoritoByUser(int id)
        {
            var favorito = await _context.MisFavoritos.Where(f => f.IdUsu == id && f.Estado == true).ToListAsync();

            if (favorito == null)
            {
                return NotFound();
            }

            return favorito;
        }


        // POST: api/favoritos
        /// <summary>
        ///  Inserta un nuevo arriendo favorito
        /// </summary>
        /// <returns></returns>
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MisFavorito>> PostFavorito(MisFavorito favorito)
        {
                _context.MisFavoritos.Add(favorito);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetFavorito", new { id = favorito.Id }, favorito);
        }


        // PUT: api/favoritos
        /// <summary>
        ///  Edita un favorito
        /// </summary>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFavorito(int id, MisFavorito ciudad)
        {
            if (id != ciudad.Id)
            {
                return BadRequest();
            }

            _context.Entry(ciudad).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CiudadExists(id))
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

        // DELETE: api/Favoritos/5
        /// <summary>
        ///  Elimina un favorito por su id
        /// </summary>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFavorito(int id)
        {
            var favorito = await _context.MisFavoritos.FindAsync(id);
            if (favorito == null)
            {
                return NotFound();
            }

            _context.MisFavoritos.Remove(favorito);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPost("Existe")]
        public async Task<ActionResult<MisFavorito>> ExisteFavorito(MisFavorito favorito)
        {
            var fav = await _context.MisFavoritos.FirstOrDefaultAsync(s => s.IdArr == favorito.IdArr && s.IdUsu == favorito.IdUsu);    
            return fav;
        }

        private bool CiudadExists(int id)
        {
            return _context.MisFavoritos.Any(e => e.Id == id);
        }


    }
}
