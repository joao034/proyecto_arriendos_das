using System;
using System.Collections.Generic;

namespace Arriendos.Models
{
    public partial class Calificaciones
    {
        public int IdUsu { get; set; }
        public int Calificacion { get; set; }

        public virtual Usuario IdUsuNavigation { get; set; }
    }
}
