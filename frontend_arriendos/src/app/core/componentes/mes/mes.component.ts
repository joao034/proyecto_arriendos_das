import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ArriendoI } from '../../../models/arriendo.interface';
import { CargarAnunciosService } from '../../../services/cargar-anuncios.service';

@Component({
  selector: 'app-mes',
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.css'],
})
export class MesComponent implements OnInit {
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
        anuncio.fecha = moment(anuncio.fecha).format('DD/MM/YYYY');
      });
    });
  }

  onClickVovler() {
    this.route.navigate(['/reportes']);
  }
  onSelectedValueChange(event: any) {
    if (event == undefined) {
      this.ARRIENDOS = this.aux;
    } else {
      this.ARRIENDOS = this.aux.filter(
        (anuncio) => anuncio.fecha.toString().indexOf('/' + event + '/') > -1
      );
    }
  }

  meses: any = [
    { id: '01', nombre: 'Enero' },
    { id: '02', nombre: 'Febrero' },
    { id: '03', nombre: 'Marzo' },
    { id: '04', nombre: 'Abril' },
    { id: '05', nombre: 'Mayo' },
    { id: '06', nombre: 'Junio' },
    { id: '07', nombre: 'Julio' },
    { id: '08', nombre: 'Agosto' },
    { id: '09', nombre: 'Septiembre' },
    { id: '10', nombre: 'Octubre' },
    { id: '11', nombre: 'Noviembre' },
    { id: '12', nombre: 'Diciembre' },
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
