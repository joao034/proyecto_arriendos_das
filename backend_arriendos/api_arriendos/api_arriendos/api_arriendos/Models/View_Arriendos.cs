using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_arriendos.Models
{
    public partial class View_Arriendos
    {
        public int IdArr { get; set; }
        public int TipoArr { get; set; }
        public int UsuPro { get; set; }
        public int NumHab { get; set; }
        public int NumBanos { get; set; }
        public int NumPisos { get; set; }
        public int NumPersonas { get; set; }
        public int CiudArr { get; set; }
        public string DirArr { get; set; }
        public bool Publicado { get; set; }
        public decimal Superficie { get; set; }
        public DateTime Fecha { get; set; }
        public bool Garage { get; set; }
        public string DescArr { get; set; }
        public bool ChechArrendar { get; set; }
        public decimal Precio { get; set; }
        public bool Amueblado { get; set; }
        public bool Mascota { get; set; }
        public string NombreCiudad { get; set; }

        public string NombreProvincia { get; set; }
        
        
        public string NombreUsuario { get; set; }

        public string NombreTipoArriendo { get; set; }
    }
}
