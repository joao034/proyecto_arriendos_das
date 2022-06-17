using System;
using System.Collections.Generic;

namespace Arriendos.Models
{
    public partial class TipoUsuario
    {
        public int IdTipUsu { get; set; }
        public string NomTip { get; set; }
        public string DescTip { get; set; }

        public virtual Usuario Usuario { get; set; }
    }
}
