using System;
using System.Collections.Generic;

namespace Arriendos.Models
{
    public partial class Provincia
    {
        public Provincia()
        {
            Ciudades = new HashSet<Ciudad>();
        }

        public int IdPro { get; set; }
        public string NomPro { get; set; }

        public virtual ICollection<Ciudad> Ciudades { get; set; }
    }
}
