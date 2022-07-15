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
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ListaArriendo>>> GetArriendos()
        {
            return await _context.ListaArriendos.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<ListaArriendo>>> GetArriendosByIdUser(int id)
        {
            var anuncios = await _context.ListaArriendos.Where(anuncios => anuncios.UsuPro == id).ToListAsync();
            return anuncios;
        }

        [HttpPost("busqueda")]
        public async Task<ActionResult<IEnumerable<ListaArriendo>>> PostArriendosSearch(ListaArriendo busqueda)
        {
            var anuncios = await _context.ListaArriendos.Where(anuncios => (busqueda.IdPro!=0?anuncios.IdPro == busqueda.IdPro:true) &&
            (busqueda.IdCiu != 0 ? anuncios.IdCiu == busqueda.IdCiu : true) &&
            (busqueda.TipoArr !=0 ? anuncios.TipoArr == busqueda.TipoArr:true) &&
            (busqueda.NumHab != 0 ? anuncios.NumHab == busqueda.NumHab:true) &&
            (busqueda.NumBanos!=0? anuncios.NumBanos == busqueda.NumBanos:true) &&
            (busqueda.Mascota!=false ? anuncios.Mascota == busqueda.Mascota:true)).ToListAsync();
            return anuncios;
        }

    }
}

