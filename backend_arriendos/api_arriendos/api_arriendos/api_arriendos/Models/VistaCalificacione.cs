using System;
using System.Collections.Generic;

namespace Arriendos.Models
{
    public partial class VistaCalificacione
    {
        public int Id { get; set; }
        public int IdArr { get; set; }
        public string DescArr { get; set; }
        public string DirArr { get; set; }
        public int IdUsu { get; set; }
        public string NomUsu { get; set; }
        public string ApeUsu { get; set; }
        public int Calificacion { get; set; }
    }
}
