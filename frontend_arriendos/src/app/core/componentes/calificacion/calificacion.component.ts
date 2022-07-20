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
    this.cargarUsuarios();
    this.cargarCalificaciones();
  }

  ngOnInit(): void {
  }
  idArriendo: any;
  usuarios: any = [];
  select: any = [];
  agregados: any = [];
  calificaciones: any = [];

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
  }

  filtrarUsuarios() {
    for(let i=0;this.calificaciones.length>i;i++){
      
      this.cargarSelect(this.calificaciones[i].idUsu);
    }
    console.log(this.calificaciones);
  }

  cargarSelect(idUsu: any) {
    const index=this.select.indexOf(idUsu);
    if(index!==-1){
      this.select.splice(index,1);
    }
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
