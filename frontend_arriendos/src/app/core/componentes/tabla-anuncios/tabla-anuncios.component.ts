import { Component, OnInit } from '@angular/core';
import { ArriendoI } from '../../../models/arriendo.interface';
@Component({
  selector: 'app-tabla-anuncios',
  templateUrl: './tabla-anuncios.component.html',
  styleUrls: ['./tabla-anuncios.component.css'],
})
export class TablaAnunciosComponent implements OnInit {
  constructor() {}

  ARRIENDOS: ArriendoI[] = [
    {
      idArr: 1,
      tipoArr: 1,
      usuPro: 1,
      numHab: 1,
      numBanos: 1,
      numPisos: 1,
      numPersonas: 1,
      ciudArr: 1,
      dirArr: 'calle 1',
      publicado: true,
      superficie: 1,
      fecha: new Date(),
      garage: true,
      descArr: 'descripcion 1',
      chechArrendar: false,
      precio: 1,
      amueblado: true,
      mascota: true,
    },
    {
      idArr: 2,
      tipoArr: 2,
      usuPro: 2,
      numHab: 2,
      numBanos: 2,
      numPisos: 2,
      numPersonas: 2,
      ciudArr: 2,
      dirArr: 'calle 2',
      publicado: true,
      superficie: 2,
      fecha: new Date(),
      garage: true,
      descArr: 'descripcion 2',
      chechArrendar: true,
      precio: 2,
      amueblado: true,
      mascota: true,
    },
  ];

  ngOnInit(): void {}

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
  dataSource = this.ARRIENDOS;
}
