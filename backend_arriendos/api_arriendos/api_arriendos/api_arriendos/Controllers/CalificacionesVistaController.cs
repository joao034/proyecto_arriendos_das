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
    public class CalificacionesVistaController : ControllerBase
    {
        private readonly ArriendosContext _context;

        public CalificacionesVistaController(ArriendosContext context)
        {
            _context = context;
        }

        // GET: api/Calificaciones
        /// <summary>
        ///  Devuelve lista de calificaciones
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VistaCalificacione>>> GetCalificaciones()
        {
            return await _context.VistaCalificaciones.ToListAsync();
        }

        // GET: api/Ciudads/5
        /// <summary>
        ///  Devuelve una ciudad por su id 
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<IEnumerable<VistaCalificacione>> GetCalificacionByIdArriendo(int id)
        {
            var calificaciones = await _context.VistaCalificaciones.Where(calificaiones => calificaiones.IdArr == id).ToListAsync();
            return calificaciones;
        }


    }
}
