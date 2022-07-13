using System;
using System.Collections.Generic;

namespace Arriendos.Models
{
    public partial class ListaArriendo
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
        public string NomCiu { get; set; }
        public string NomPro { get; set; }
        public string Usuario { get; set; }
        public string NomTipArr { get; set; }
        public int IdCiu { get; set; }
        public int IdPro { get; set; }
        public string Imagenes { get; set; }
    }
}
