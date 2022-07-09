import { Component, OnInit } from '@angular/core';
import { CargarAnunciosService } from 'src/app/services/cargar-anuncios.service';
import { ArriendoI } from '../../../models/arriendo.interface';
@Component({
  selector: 'app-tabla-anuncios',
  templateUrl: './tabla-anuncios.component.html',
  styleUrls: ['./tabla-anuncios.component.css'],
})
export class TablaAnunciosComponent implements OnInit {
  constructor(private apiAnuncios:CargarAnunciosService) {}
  array:any=[];
  ARRIENDOS!: ArriendoI[] ;

  ngOnInit(): void {
    this.cargarAnuncios();
  }

  cargarAnuncios(){
    this.apiAnuncios.cargarAnuncios().subscribe(anuncios=>{
      this.array=anuncios;
      this.ARRIENDOS=this.array;
    }
    )
  }

  displayedColumns: string[] = [
    'idArr',
    'tipoArr',
    //'usuPro',
    'numHab',
    'numBanos',
    'numPisos',
    //'numPersonas',
    //'ciudArr',
    //'dirArr',
    //'publicado',
    //'superficie',
    //'fecha',
    //'garage',
    //'descArr',
    'chechArrendar',
    'precio',
    'amueblado',
    //'mascota'
  ];
  //dataSource = this.ARRIENDOS;
}
