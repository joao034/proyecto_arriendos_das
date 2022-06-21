using System;
using System.Collections.Generic;

namespace Arriendos.Models
{
    public partial class Usuario
    {
        public Usuario()
        {
            Arriendos = new HashSet<Arriendo>();
        }

        public int IdUsu { get; set; }
        public string NomUsu { get; set; }
        public string ApeUsu { get; set; }
        public DateOnly FechaNacUsu { get; set; }
        public string TelUsu { get; set; }
        public string Tel2Usu { get; set; }
        public string CorreoUsu { get; set; }
        public int TipoUsu { get; set; }
        public string UsernameUsu { get; set; }
        public string PasswordUsu { get; set; }

    public virtual TipoUsuario TipoUsuNavigation { get; set; }
        public virtual ICollection<Arriendo> Arriendos { get; set; }
    }
}
