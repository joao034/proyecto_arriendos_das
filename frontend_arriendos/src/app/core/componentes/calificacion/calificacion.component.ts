import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiCalificacionesService } from 'src/app/services/api-calificaciones.service';
import { ApiCrearUsuarioService } from '../../../services/api-crear-usuario.service';
import 'lodash';
declare var _:any;

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
    this.usuario = JSON.parse(localStorage.getItem('usuario')!.toString());
  }

  ngOnInit(): void {
    this.cargarUsuarios();
  }
  idArriendo: any;
  usuarios: any = [];
  select: any = [];
  agregados: any = [];
  calificaciones: any = [];
  usuario:any;

  formCalificaciones: FormGroup = new FormGroup({
    idUsu: new FormControl(''),
    idArr:new FormControl(''),
    calificacion: new FormControl(''),
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
    this.cargarCalificaciones();
  }

  filtrarUsuarios() {
    for(let i=0;this.calificaciones.length>i;i++){
      this.cargarSelect(this.calificaciones[i]);
    }
  }

  cargarSelect(usu: any) {
    this.select=_.filter(this.select,function(o:any){return o.idUsu != usu.idUsu;});
  }


  cargarCalificaciones() {
    this.apiCalificaciones.getCalificacionesVistaByIdArriendo(this.idArriendo).subscribe((calificaciones) => {
      this.calificaciones = calificaciones;
      this.filtrarUsuarios();
    });
  }

  displayedColumns: string[] = [
    'id',
    'idArr',
    'idUsu',
    'calificacion',
    'dirArr'
  ];

  onClickEliminar(id: any) {
    if(confirm('¿Está seguro de eliminar?')){
      this.apiCalificaciones.deleteCalificaciones(id).subscribe((res)=>{ 
        if(res == null){
          this.cargarCalificaciones();
        }
      } );
    }
  }

  onClickAgregar(form: any) {
    form.idArr = this.idArriendo;
    form.calificacion = 0;
    this.apiCalificaciones.postCalificaciones(form).subscribe((calificaciones) => {
      this.cargarCalificaciones();
    });
  }

  
}
