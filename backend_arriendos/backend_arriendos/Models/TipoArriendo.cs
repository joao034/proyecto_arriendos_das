using System;
using System.Collections.Generic;

namespace Arriendos.Models
{
    public partial class TipoArriendo
    {
        public TipoArriendo()
        {
            Arriendos = new HashSet<Arriendo>();
        }

        public int IdTipArr { get; set; }
        public string NomTipArr { get; set; }
        public string DescTipArr { get; set; }

        public virtual ICollection<Arriendo> Arriendos { get; set; }
    }
}
