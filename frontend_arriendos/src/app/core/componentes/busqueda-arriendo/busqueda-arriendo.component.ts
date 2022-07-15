import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  @Output()
  busqueda:EventEmitter<any>=new EventEmitter<any>();
  constructor(private apiSelects:CargarSelectsService) { }

  ngOnInit(): void {
    this.cargarProvincias();
    this.cargarTipoArriendos();
  }

  busquedaForm=new FormGroup({
    idPro:new FormControl(''),
    idCiu:new FormControl(''),
    idTipArr:new FormControl(''),
    numHab:new FormControl(''),
    numBanos:new FormControl(''),
    mascota:new FormControl('')
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

  onClickSearch(form:any){
    form.mascota=form.mascota==""?false:true;
    form.numHab=form.numHab==""?0:form.numHab;
    form.numBanos=form.numBanos==""?0:form.numBanos;
    form.idTipArr=form.idTipArr==""?0:form.idTipArr;
    form.idCiu=form.idCiu==""?0:form.idCiu;
    form.idPro=form.idPro==""?0:form.idPro;
    //console.log(form);
    this.busqueda.emit(JSON.stringify(form));
  }

}
