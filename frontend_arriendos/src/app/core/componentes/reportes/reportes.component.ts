import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArriendoI } from 'src/app/models/arriendo.interface';
import { ApiArriendosService } from 'src/app/services/api-arriendos.service';
import { CargarAnunciosService } from 'src/app/services/cargar-anuncios.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor(private apiAnuncios: CargarAnunciosService,private route: Router) { }
  array: any = [];
  ARRIENDOS!: ArriendoI[];
  ngOnInit(): void {
    this.cargarAnuncios();
  }

  cargarAnuncios() {
      this.apiAnuncios.cargarAnuncios().subscribe((anuncios) => {
        this.array = anuncios;
        this.ARRIENDOS = this.array;
      });
  }

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
