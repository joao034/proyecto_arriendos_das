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
    }
}

