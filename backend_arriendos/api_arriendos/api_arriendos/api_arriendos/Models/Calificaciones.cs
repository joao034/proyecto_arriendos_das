using System;
using System.Collections.Generic;

namespace Arriendos.Models
{
    public partial class Calificaciones
    {

        public int Id { get; set; }

        public int IdArr { get; set; }
        public int IdUsu { get; set; }
        public int Calificacion { get; set; }

        public virtual Usuario IdUsuNavigation { get; set; }
        public virtual Arriendo IdArrNavigation{ get; set; }
    }
}
