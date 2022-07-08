import { Component, OnInit } from '@angular/core';
import { CargarSelectsService } from 'src/app/services/cargar-selects.service';

@Component({
  selector: 'app-formulario-arriendo',
  templateUrl: './formulario-arriendo.component.html',
  styleUrls: ['./formulario-arriendo.component.css'],
})
export class FormularioArriendoComponent implements OnInit {
  provincias: any = [];
  cantones: any = [];

  constructor(private apiSelects: CargarSelectsService) {}

  ngOnInit(): void {
    this.cargarProvincias();
  }

  cargarProvincias() {
    this.apiSelects.cargarProvincias().subscribe((provincias) => {
      this.provincias = provincias;
    });
  }

  onSelectedValueChange(provincia: any) {
    this.apiSelects
      .cargarCantonesProvincia(provincia)
      .subscribe((cantonesProvincia) => {
        this.cantones = cantonesProvincia;
      });
  }



}
