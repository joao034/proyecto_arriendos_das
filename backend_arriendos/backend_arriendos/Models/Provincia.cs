using System;
using System.Collections.Generic;

namespace Arriendos.Models
{
    public partial class Provincia
    {
        public Provincia()
        {
            Ciudades = new HashSet<Ciudade>();
        }

        public int IdPro { get; set; }
        public string NomPro { get; set; }

        public virtual ICollection<Ciudade> Ciudades { get; set; }
    }
}
