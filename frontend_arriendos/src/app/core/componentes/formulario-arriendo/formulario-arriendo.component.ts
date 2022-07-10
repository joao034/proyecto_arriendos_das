import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { ArriendoI } from 'src/app/models/arriendo.interface';
import { ApiArriendosService } from 'src/app/services/api-arriendos.service';
import { CargarSelectsService } from 'src/app/services/cargar-selects.service';

@Component({
  selector: 'app-formulario-arriendo',
  templateUrl: './formulario-arriendo.component.html',
  styleUrls: ['./formulario-arriendo.component.css'],
})
export class FormularioArriendoComponent implements OnInit {
  provincias: any = [];
  cantones: any = [];

  formArriendo : FormGroup;


  constructor(
    private apiSelects: CargarSelectsService,
    private apiArriendo: ApiArriendosService
  ) {
    this.formArriendo = new FormGroup({
      titulo: new FormControl(''),
      precio: new FormControl(''),
      descripcion: new FormControl(''),
      imagen : new FormControl(''),
      //informacion arriendo
      numHabitaciones: new FormControl(''),
      numBanos: new FormControl(''),
      idProvincia : new FormControl(''),
      idCanton : new FormControl(''),
      //informacion extra
      garaje : new FormControl(''),
      compartido : new FormControl(''),
      mascotas : new FormControl(''),
      disponible: new FormControl(''),
    });
  }

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

  insertarArriendo(arriendo: ArriendoI) {
    this.apiArriendo.insertarArriendo(arriendo).subscribe((arriendo) => {
      console.log(arriendo);
    });
  }

  cargarImagen(){
    
  }
}
