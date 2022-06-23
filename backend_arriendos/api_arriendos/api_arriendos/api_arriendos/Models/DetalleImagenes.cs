using System;
using System.Collections.Generic;

namespace Arriendos.Models
{
    public partial class DetalleImagenes
    {
        public int IdArr { get; set; }
        public string Imagenes { get; set; }

        public virtual Arriendo IdArrNavigation { get; set; }
    }
}
