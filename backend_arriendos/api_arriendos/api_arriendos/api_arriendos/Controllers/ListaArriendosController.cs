using System;
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
    public class ListaArriendosController : ControllerBase
    {
        private readonly ArriendosContext _context;

        public ListaArriendosController(ArriendosContext context)
        {
            _context = context;
        }

        // GET: api/Arriendoes
        /// <summary>
        ///  Devuelve la vista de lista de arriendos
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ListaArriendo>>> GetArriendos()
        {
            return await _context.ListaArriendos.Where(anuncios => anuncios.Publicado == true).ToListAsync();
        }

        /// <summary>
        ///  Obtiene un arriendo de la vista de lista de arriendos por usuario
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<ListaArriendo>>> GetArriendosByIdUser(int id)
        {
            var anuncios = await _context.ListaArriendos.Where(anuncios => anuncios.UsuPro == id).ToListAsync();
            return anuncios;
        }

        /// <summary>
        ///  Devuelve una lista de arriendos por parametros de busqueda
        /// </summary>
        /// <returns></returns>
        [HttpPost("busqueda")]
        public async Task<ActionResult<IEnumerable<ListaArriendo>>> PostArriendosSearch(ListaArriendo busqueda)
        {
            var anuncios = await _context.ListaArriendos.Where(anuncios => (busqueda.IdPro!=0?anuncios.IdPro == busqueda.IdPro:true) &&
            (busqueda.IdCiu != 0 ? anuncios.IdCiu == busqueda.IdCiu : true) &&
            (busqueda.TipoArr !=0 ? anuncios.TipoArr == busqueda.TipoArr:true) &&
            (busqueda.NumHab != 0 ? anuncios.NumHab == busqueda.NumHab:true) &&
            (busqueda.NumBanos!=0? anuncios.NumBanos == busqueda.NumBanos:true) &&
            (busqueda.Mascota!=false ? anuncios.Mascota == busqueda.Mascota:true) &&
            anuncios.Publicado == true).ToListAsync();
            return anuncios;
        }

        /// <summary>
        ///  Devuelve un arriendo por su id
        /// </summary>
        /// <returns></returns>
        [HttpGet("idArriendo/{id}")]
        public async Task<ActionResult<ListaArriendo>> GetArriendo(int id)
        {
            var arriendo = await _context.ListaArriendos.Where(arriendo => arriendo.IdArr == id).FirstAsync();
            return arriendo;
        }

    }
}

