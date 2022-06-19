using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Arriendos.Models;

namespace Arriendos.Data
{
    public partial class ArriendosContext : DbContext
    {
        public ArriendosContext()
        {
        }

        public ArriendosContext(DbContextOptions<ArriendosContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Arriendo> Arriendos { get; set; }
        public virtual DbSet<Calificacione> Calificaciones { get; set; }
        public virtual DbSet<Ciudade> Ciudades { get; set; }
        public virtual DbSet<DetalleImagene> DetalleImagenes { get; set; }
        public virtual DbSet<MisFavorito> MisFavoritos { get; set; }
        public virtual DbSet<Provincia> Provincias { get; set; }
        public virtual DbSet<TipoArriendo> TipoArriendos { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuarios { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8mb4_general_ci")
                .HasCharSet("utf8mb4");

            modelBuilder.Entity<Arriendo>(entity =>
            {
                entity.HasKey(e => e.IdArr)
                    .HasName("PRIMARY");

                entity.ToTable("arriendos");

                entity.HasCharSet("utf8")
                    .UseCollation("utf8_general_ci");

                entity.HasIndex(e => e.CiudArr, "CIUDAD_INCORRECTA");

                entity.HasIndex(e => e.TipoArr, "TIP_ARRIENDO_INCORRECTO");

                entity.HasIndex(e => e.UsuPro, "USER_PROPIETARIO_INCORRECTO");

                entity.Property(e => e.IdArr)
                    .HasColumnType("int(11)")
                    .HasColumnName("ID_ARR");

                entity.Property(e => e.Amueblado).HasColumnName("AMUEBLADO");

                entity.Property(e => e.ChechArrendar).HasColumnName("CHECH_ARRENDAR");

                entity.Property(e => e.CiudArr)
                    .HasColumnType("int(11)")
                    .HasColumnName("CIUD_ARR");

                entity.Property(e => e.DescArr)
                    .IsRequired()
                    .HasMaxLength(200)
                    .HasColumnName("DESC_ARR");

                entity.Property(e => e.DirArr)
                    .IsRequired()
                    .HasMaxLength(200)
                    .HasColumnName("DIR_ARR");

                entity.Property(e => e.Fecha)
                    .HasColumnType("datetime")
                    .ValueGeneratedOnAddOrUpdate()
                    .HasColumnName("FECHA")
                    .HasDefaultValueSql("current_timestamp()");

                entity.Property(e => e.Garage).HasColumnName("GARAGE");

                entity.Property(e => e.Mascota).HasColumnName("MASCOTA");

                entity.Property(e => e.NumBanos)
                    .HasColumnType("int(11)")
                    .HasColumnName("NUM_BANOS");

                entity.Property(e => e.NumHab)
                    .HasColumnType("int(11)")
                    .HasColumnName("NUM_HAB");

                entity.Property(e => e.NumPersonas)
                    .HasColumnType("int(11)")
                    .HasColumnName("NUM_PERSONAS");

                entity.Property(e => e.NumPisos)
                    .HasColumnType("int(11)")
                    .HasColumnName("NUM_PISOS");

                entity.Property(e => e.Precio)
                    .HasPrecision(10, 2)
                    .HasColumnName("PRECIO");

                entity.Property(e => e.Publicado).HasColumnName("PUBLICADO");

                entity.Property(e => e.Superficie)
                    .HasPrecision(10, 2)
                    .HasColumnName("SUPERFICIE");

                entity.Property(e => e.TipoArr)
                    .HasColumnType("int(11)")
                    .HasColumnName("TIPO_ARR");

                entity.Property(e => e.UsuPro)
                    .HasColumnType("int(11)")
                    .HasColumnName("USU_PRO");

                entity.HasOne(d => d.CiudArrNavigation)
                    .WithMany(p => p.Arriendos)
                    .HasForeignKey(d => d.CiudArr)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("CIUDAD_INCORRECTA");

                entity.HasOne(d => d.TipoArrNavigation)
                    .WithMany(p => p.Arriendos)
                    .HasForeignKey(d => d.TipoArr)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("TIP_ARRIENDO_INCORRECTO");

                entity.HasOne(d => d.UsuProNavigation)
                    .WithMany(p => p.Arriendos)
                    .HasForeignKey(d => d.UsuPro)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("USER_PROPIETARIO_INCORRECTO");
            });

            modelBuilder.Entity<Calificacione>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("calificaciones");

                entity.HasCharSet("utf8")
                    .UseCollation("utf8_general_ci");

                entity.HasIndex(e => e.IdUsu, "USER_INCORRECTO");

                entity.Property(e => e.Calificacion)
                    .HasColumnType("int(11)")
                    .HasColumnName("CALIFICACION");

                entity.Property(e => e.IdUsu)
                    .HasColumnType("int(11)")
                    .HasColumnName("ID_USU");

                entity.HasOne(d => d.IdUsuNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdUsu)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("USER_INCORRECTO");
            });

            modelBuilder.Entity<Ciudade>(entity =>
            {
                entity.HasKey(e => e.IdCiu)
                    .HasName("PRIMARY");

                entity.ToTable("ciudades");

                entity.HasCharSet("utf8")
                    .UseCollation("utf8_general_ci");

                entity.HasIndex(e => e.ProPer, "PROVINCIA_INCORRECTA");

                entity.Property(e => e.IdCiu)
                    .HasColumnType("int(11)")
                    .HasColumnName("ID_CIU");

                entity.Property(e => e.NomCiu)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("NOM_CIU");

                entity.Property(e => e.ProPer)
                    .HasColumnType("int(11)")
                    .HasColumnName("PRO_PER");

                entity.HasOne(d => d.ProPerNavigation)
                    .WithMany(p => p.Ciudades)
                    .HasForeignKey(d => d.ProPer)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("PROVINCIA_INCORRECTA");
            });

            modelBuilder.Entity<DetalleImagene>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("detalle_imagenes");

                entity.HasCharSet("utf8")
                    .UseCollation("utf8_general_ci");

                entity.HasIndex(e => e.IdArr, "ARRIENDO_INCORRECTO_IMG");

                entity.Property(e => e.IdArr)
                    .HasColumnType("int(11)")
                    .HasColumnName("ID_ARR");

                entity.Property(e => e.Imagenes)
                    .IsRequired()
                    .HasMaxLength(5000)
                    .HasColumnName("IMAGENES");

                entity.HasOne(d => d.IdArrNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdArr)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ARRIENDO_INCORRECTO_IMG");
            });

            modelBuilder.Entity<MisFavorito>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("mis_favoritos");

                entity.HasCharSet("utf8")
                    .UseCollation("utf8_general_ci");

                entity.HasIndex(e => e.IdArr, "ARRIENDO_INCORRECTO_FAV");

                entity.HasIndex(e => e.IdUsu, "USER_INCORRECTO_FAV");

                entity.Property(e => e.IdArr)
                    .HasColumnType("int(11)")
                    .HasColumnName("ID_ARR");

                entity.Property(e => e.IdUsu)
                    .HasColumnType("int(11)")
                    .HasColumnName("ID_USU");

                entity.HasOne(d => d.IdArrNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdArr)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("ARRIENDO_INCORRECTO_FAV");

                entity.HasOne(d => d.IdUsuNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdUsu)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("USER_INCORRECTO_FAV");
            });

            modelBuilder.Entity<Provincia>(entity =>
            {
                entity.HasKey(e => e.IdPro)
                    .HasName("PRIMARY");

                entity.ToTable("provincias");

                entity.HasCharSet("utf8")
                    .UseCollation("utf8_general_ci");

                entity.Property(e => e.IdPro)
                    .HasColumnType("int(11)")
                    .HasColumnName("ID_PRO");

                entity.Property(e => e.NomPro)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("NOM_PRO");
            });

            modelBuilder.Entity<TipoArriendo>(entity =>
            {
                entity.HasKey(e => e.IdTipArr)
                    .HasName("PRIMARY");

                entity.ToTable("tipo_arriendo");

                entity.HasCharSet("utf8")
                    .UseCollation("utf8_general_ci");

                entity.Property(e => e.IdTipArr)
                    .HasColumnType("int(11)")
                    .HasColumnName("ID_TIP_ARR");

                entity.Property(e => e.DescTipArr)
                    .IsRequired()
                    .HasMaxLength(70)
                    .HasColumnName("DESC_TIP-ARR");

                entity.Property(e => e.NomTipArr)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("NOM_TIP_ARR");
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipUsu)
                    .HasName("PRIMARY");

                entity.ToTable("tipo_usuario");

                entity.HasCharSet("utf8")
                    .UseCollation("utf8_general_ci");

                entity.Property(e => e.IdTipUsu)
                    .HasColumnType("int(11)")
                    .HasColumnName("ID_TIP_USU");

                entity.Property(e => e.DescTip)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("DESC_TIP");

                entity.Property(e => e.NomTip)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("NOM_TIP");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsu)
                    .HasName("PRIMARY");

                entity.ToTable("usuarios");

                entity.HasCharSet("utf8")
                    .UseCollation("utf8_general_ci");

                entity.HasIndex(e => e.TipoUsu, "TIPO_USER_INCORRECTO");

                entity.Property(e => e.IdUsu)
                    .HasColumnType("int(11)")
                    .HasColumnName("ID_USU");

                entity.Property(e => e.ApeUsu)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("APE_USU");

                entity.Property(e => e.CorreoUsu)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("CORREO_USU");

                entity.Property(e => e.FechaNacUsu).HasColumnName("FECHA_NAC_USU");

                entity.Property(e => e.NomUsu)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("NOM_USU");

                entity.Property(e => e.Tel2Usu)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("TEL2_USU");

                entity.Property(e => e.TelUsu)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("TEL_USU");

                entity.Property(e => e.TipoUsu)
                    .HasColumnType("int(11)")
                    .HasColumnName("TIPO_USU");

                entity.HasOne(d => d.TipoUsuNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.TipoUsu)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("TIPO_USER_INCORRECTO");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
