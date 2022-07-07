import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CargarSelectsService } from 'src/app/services/cargar-selects.service';

@Component({
  selector: 'app-busqueda-arriendo',
  templateUrl: './busqueda-arriendo.component.html',
  styleUrls: ['./busqueda-arriendo.component.css']
})
export class BusquedaArriendoComponent implements OnInit {

  provincias:any=[];
  cantones:any=[];
  tipoArriendos:any=[];
  constructor(private apiSelects:CargarSelectsService) { }

  ngOnInit(): void {
    this.cargarProvincias();
    this.cargarCantones();
    this.cargarTipoArriendos();
  }

  busquedaForm=new FormGroup({
    ciudad:new FormControl('',Validators.required),
    canton:new FormControl('',Validators.required),
    tipoArriendo:new FormControl('',Validators.required),
    habitaciones:new FormControl('',Validators.required),
    banios:new FormControl('',Validators.required),
    compartido:new FormControl('',Validators.required)
  })

  cargarProvincias(){
    this.apiSelects.cargarProvincias().subscribe(provincias=>{
      this.provincias=provincias;
    })
  }

  cargarCantones(){
    this.apiSelects.cargarCantones().subscribe(cantones=>{
      this.cantones=cantones;
    })
  }

  cargarTipoArriendos(){
    this.apiSelects.cargarTipoArriendos().subscribe(tipoArriendos=>{
      this.tipoArriendos=tipoArriendos;
    })
  }


}
