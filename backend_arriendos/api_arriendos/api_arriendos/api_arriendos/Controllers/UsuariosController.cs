﻿using System;
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
    public class UsuariosController : ControllerBase
    {
        private readonly ArriendosContext _context;

        public UsuariosController(ArriendosContext context)
        {
            _context = context;
        }

        // GET: api/Usuarios
        // GET: api/Arriendoes/5
        /// <summary>
        /// Retorna la lista de usuarios
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuarios()
        {
            return await _context.Usuarios.ToListAsync();
        }

        // GET: api/Usuarios/5
        /// <summary>
        /// Retorna un usuario por su id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<Usuario>> GetUsuario(int id)
        {
            var usuario = await _context.Usuarios.FindAsync(id);

            if (usuario == null)
            {
                return NotFound();
            }

            return usuario;
        }

        // PUT: api/Usuarios/5
        /// <summary>
        /// Modifica un usuario
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsuario(int id, Usuario usuario)
        {
            if (id != usuario.IdUsu)
            {
                return BadRequest();
            }

            _context.Entry(usuario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsuarioExists(id))
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

        // POST: api/Usuarios
        /// <summary>
        /// Inserta un nuevo usuario
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Usuario>> PostUsuario(Usuario usuario)
        {
            _context.Usuarios.Add(usuario);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUsuario", new { id = usuario.IdUsu }, usuario);
        }

        // DELETE: api/Usuarios/5
        /// <summary>
        /// Elimana un usuario por su id 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsuario(int id)
        {
            var usuario = await _context.Usuarios.FindAsync(id);
            if (usuario == null)
            {
                return NotFound();
            }

            _context.Usuarios.Remove(usuario);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UsuarioExists(int id)
        {
            return _context.Usuarios.Any(e => e.IdUsu == id);
        }

        /// <summary>
        /// Login de usuario necesario usuario y contraseña 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost("Login")]

        public async Task<ActionResult<Usuario>> PostLogin(Usuario usuario)
        {

            /*
               var usuario = (from Usuario in _context.Usuarios
                             where Usuario.UsernameUsu == user && Usuario.PasswordUsu == password
                             select Usuario);
            */

            var sqlUsuario = await _context.Usuarios.FirstOrDefaultAsync(s => s.UsernameUsu == usuario.UsernameUsu && s.PasswordUsu == usuario.PasswordUsu);

            /*if (sqlUsuario == null)
            {
                return NotFound();
            }*/
            //CreatedAtAction("GetUsuario", new { id = usuario.IdUsu }, usuario);;          
            return sqlUsuario;
        }

    }
}
