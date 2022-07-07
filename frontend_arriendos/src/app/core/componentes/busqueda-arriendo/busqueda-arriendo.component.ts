import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProvinciaI } from 'src/app/models/provincia.interface';
import { CargarSelectsService } from 'src/app/services/cargar-selects.service';

@Component({
  selector: 'app-busqueda-arriendo',
  templateUrl: './busqueda-arriendo.component.html',
  styleUrls: ['./busqueda-arriendo.component.css']
})
export class BusquedaArriendoComponent implements OnInit {

  array:any=[];
  provincias!: ProvinciaI[];
  cantones:any=[];
  tipoArriendos:any=[];
  constructor(private apiSelects:CargarSelectsService) { }

  ngOnInit(): void {
    this.cargarProvincias();
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
      this.array=provincias;
      this.provincias=this.array;
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

  onSelectedValueChange(provincia:any){
   this.apiSelects.cargarCantonesProvincia(provincia).subscribe(cantonesProvincia=>{
    this.cantones=cantonesProvincia;
   })
  }


}
