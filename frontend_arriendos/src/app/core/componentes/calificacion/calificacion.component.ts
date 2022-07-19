import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiCalificacionesService } from 'src/app/services/api-calificaciones.service';
import { ApiCrearUsuarioService } from '../../../services/api-crear-usuario.service';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css'],
})
export class CalificacionComponent implements OnInit {
  constructor(
    private apiUsuarios: ApiCrearUsuarioService,
    private activatedRoute: ActivatedRoute,
    private apiCalificaciones: ApiCalificacionesService
  ) {
    this.idArriendo = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.cargarUsuarios();
    this.cargarCalificaciones();
    
  }
  idArriendo: any;
  usuarios: any = [];
  select: any = [];
  agregados: any = [];
  calificaciones: any = [];

  formCalificaciones: FormGroup = new FormGroup({
    idUsu: new FormControl(''),
  });

  cargarUsuarios() {
    this.apiUsuarios.getUsers().subscribe((usuarios) => {
      this.usuarios = usuarios;
      this.usuarios = this.usuarios.filter(
        (usuario: any) => usuario.tipoUsu == 2
      );
      this.select=this.usuarios;
      this.agregados=this.usuarios;
    });
  }

  filtrarUsuarios() {
    for(let i=0;this.calificaciones.length>i;i++){
      this.cargarSelect(this.calificaciones[i].idUsu);
      this.cargarAgregados(this.calificaciones[i].idUsu);
    }
  }

  cargarSelect(idUsu: any) {
    this.select = this.usuarios.filter((usuario: any) => usuario.idUsu == idUsu);
  }

  cargarAgregados(idUsu:any){
    this.agregados=this.usuarios.filter((usuario:any)=>usuario.idUsu!=idUsu);
  }

  cargarCalificaciones() {
    this.apiCalificaciones.getCalificacionesByIdArriendo(this.idArriendo).subscribe((calificaciones) => {
      this.calificaciones = calificaciones;
      this.filtrarUsuarios();
    });
  }

  displayedColumns: string[] = [
    'id',
    'idArr',
    'idUsu',
    'calificacion'
  ];

  onClickAgregar(form: any) {}
}
