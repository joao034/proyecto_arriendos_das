import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ArriendoI } from '../../../models/arriendo.interface';
import { CargarAnunciosService } from '../../../services/cargar-anuncios.service';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css'],
})
export class TipoComponent implements OnInit {
  constructor(
    private apiAnuncios: CargarAnunciosService,
    private route: Router
  ) {}

  array: any = [];
  ARRIENDOS!: ArriendoI[];
  aux!: ArriendoI[];
  ngOnInit(): void {
    this.cargarAnuncios();
  }

  cargarAnuncios() {
    this.apiAnuncios.cargarAnuncios().subscribe((anuncios) => {
      this.array = anuncios;
      this.ARRIENDOS = this.array;
      this.aux = this.ARRIENDOS;
      this.ARRIENDOS.forEach((anuncio: ArriendoI) => {
        anuncio.fecha = moment(anuncio.fecha).format('DD/MMM/YYYY');
      });
    });
  }

  onClickVolver() {
    this.route.navigate(['/reportes']);
  }
  onSelectedValueChange(event: any) {
    console.log(event);
    if(event==undefined){
      this.ARRIENDOS= this.aux;
    }else{
    this.ARRIENDOS= this.aux.filter(
      (anuncio) => anuncio.tipoArr===event
    );
    }
  }

  tipos: any = [
    { id: 1, nombre: 'Casa' },
    { id: 2, nombre: 'Departamento' },
    { id: 3, nombre: 'Anuncio' },
  ];

  displayedColumns: string[] = [
    'idArr',
    //'usuPro',
    'descArr',
    'nomTipArr',
    //'numHab',
    //'numBanos',
    //'precio',
    //'numPisos',
    //'numPersonas',
    //'ciudArr',
    //'dirArr',
    //'superficie',
    'fecha',
    //'garage',
    'publicado',
    'chechArrendar',
    'nomCiu',
    //'amueblado',
  ];
}
