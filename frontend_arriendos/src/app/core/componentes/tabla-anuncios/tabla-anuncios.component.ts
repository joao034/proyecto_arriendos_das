import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiArriendosService } from 'src/app/services/api-arriendos.service';
import { CargarAnunciosService } from 'src/app/services/cargar-anuncios.service';
import { ArriendoI } from '../../../models/arriendo.interface';
@Component({
  selector: 'app-tabla-anuncios',
  templateUrl: './tabla-anuncios.component.html',
  styleUrls: ['./tabla-anuncios.component.css'],
})
export class TablaAnunciosComponent implements OnInit {
  constructor(
    private apiAnuncios: CargarAnunciosService,
    private route: Router,
    private apiArriendos : ApiArriendosService
  ) {}
  
  array: any = [];
  ARRIENDOS!: ArriendoI[];
  usuario: any;
  idUsu: any;
  tipoUsu: any;

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  cargarAnuncios(id: any, tipo: any) {
    if(tipo==1){
      this.apiAnuncios.cargarAnuncios().subscribe((anuncios) => {
        this.array = anuncios;
        this.ARRIENDOS = this.array;
      });
    }else{
      this.apiAnuncios.cargarAnunciosByUser(id).subscribe((anuncios) => {
        this.array = anuncios;
        this.ARRIENDOS = this.array;
      });
    }
    
  }

  onClickNuevo() {
    this.route.navigate(['/nuevo-arriendo']);
  }

  checkLocalStorage() {
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario')!.toString());
      this.idUsu = this.usuario.idUsu;
      this.tipoUsu = this.usuario.tipoUsu;
      this.cargarAnuncios(this.idUsu, this.tipoUsu);
    }
  }

  redireccionEditar(id : any) {
    this.route.navigate(['/editar-arriendo/', id]);
  }

  eliminarArriendo(id: number){
    if(confirm('¿Está seguro de eliminar el arriendo?')){
      this.apiArriendos.eliminarArriendo(id).subscribe((res)=>{ 
        if(res == null){
          alert('Arriendo eliminado');
          this.cargarAnuncios(this.idUsu, this.tipoUsu);
        }
        
      } );
    }
    
  }

  redireccionCalificaciones(id: number) {
    this.route.navigate(['/calficacion/', id]);
  }

  displayedColumns: string[] = [
    'idArr',
    //'tipoArr',
    //'usuPro',
    'descArr',
    'numHab',
    'numBanos',
    'precio',
    //'numPisos',
    //'numPersonas',
    //'ciudArr',
    //'dirArr',
    'publicado',
    //'superficie',
    //'fecha',
    //'garage',
    'chechArrendar',
    'nomCiu',
    'amueblado',
  ];
}
