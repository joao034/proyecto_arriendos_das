﻿using System;
using System.Collections.Generic;

namespace Arriendos.Models
{
    public partial class MisFavorito
    {
        public int IdArr { get; set; }
        public int IdUsu { get; set; }

        public virtual Arriendo IdArrNavigation { get; set; }
        public virtual Usuario IdUsuNavigation { get; set; }
    }
}
