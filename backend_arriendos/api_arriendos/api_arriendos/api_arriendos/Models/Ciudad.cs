using System;
using System.Collections.Generic;

namespace Arriendos.Models
{
    public partial class Ciudad
    {
        public Ciudad()
        {
            Arriendos = new HashSet<Arriendo>();
        }

        public int IdCiu { get; set; }
        public string NomCiu { get; set; }
        public int ProPer { get; set; }

        public virtual Provincia ProPerNavigation { get; set; }
        public virtual ICollection<Arriendo> Arriendos { get; set; }

        public static implicit operator List<object>(Ciudad v)
        {
            throw new NotImplementedException();
        }
    }
}
