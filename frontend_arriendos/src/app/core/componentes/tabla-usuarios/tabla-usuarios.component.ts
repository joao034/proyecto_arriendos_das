import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ApiUsuariosService } from 'src/app/services/api-usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  USUARIOS!: any[];
  array: any = []; 
  usuario: any;
  tipoUsu: any;

  constructor(    private apiUsuario: ApiUsuariosService,
    private route: Router) { }

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  cargarUsuarios(tipo: any) {
    if(tipo==1){
      this.apiUsuario.listarUsuarios().subscribe((usuarios) => {
      this.array = usuarios;  
      this.USUARIOS = this.array;
      });       
     
  }
} 


  checkLocalStorage() {
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario')!.toString());      
      this.tipoUsu = this.usuario.tipoUsu;
      this.cargarUsuarios(this.tipoUsu);
    }
  }

  redireccionEditar(id : any) {
    this.route.navigate(['/editar-usuario/', id]);
  }

  // metodo para eliminar usuario
  eliminarUsuario(id: number){
    if(confirm('¿Está seguro de eliminar el usuario?')){
      this.apiUsuario.eliminarUsuario(id).subscribe((res)=>{ 
        if(res == null){
          alert('Usuario eliminado');
          this.cargarUsuarios(this.tipoUsu);
        }
        
      } );
    }
  }
  
  displayedColumns: string[] = [
    'idUsu',
    'nomUsu',
    'apeUsu',
    'fechaNacUsu',
    'telUsu',
    'tel2Usu',
    'correoUsu',
    'usernameUsu',
    'acciones'
  ];

}
