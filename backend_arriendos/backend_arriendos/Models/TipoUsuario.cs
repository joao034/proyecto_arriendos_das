using System;
using System.Collections.Generic;

namespace Arriendos.Models
{
    public partial class TipoUsuario
    {
        public TipoUsuario()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public int IdTipUsu { get; set; }
        public string NomTip { get; set; }
        public string DescTip { get; set; }

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
