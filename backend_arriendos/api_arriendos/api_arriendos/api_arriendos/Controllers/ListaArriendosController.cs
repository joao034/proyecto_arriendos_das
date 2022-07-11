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

        [HttpPost]
        public async Task<ActionResult<IEnumerable<ListaArriendo>>> GetArriendosSearch(ListaArriendo busqueda)
        {
            var anuncios = await _context.ListaArriendos.Where(anuncios => anuncios.CiudArr==busqueda.CiudArr && 
            anuncios.NomPro == busqueda.NomPro && 
            anuncios.TipoArr == busqueda.TipoArr &&
            anuncios.NumHab==busqueda.NumHab &&
            anuncios.NumBanos==busqueda.NumBanos &&
            anuncios.Mascota == busqueda.Mascota).ToListAsync();
            return anuncios;
        }

    }
}

