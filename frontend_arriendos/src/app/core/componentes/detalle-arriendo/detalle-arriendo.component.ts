import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ArriendoI } from 'src/app/models/arriendo.interface';
import { ApiArriendosService } from 'src/app/services/api-arriendos.service';
import { ApiCalificacionesService } from 'src/app/services/api-calificaciones.service';
import { CargarAnunciosService } from 'src/app/services/cargar-anuncios.service';
import { FavoritosService } from 'src/app/services/favoritos.service';


@Component({
  selector: 'app-detalle-arriendo',
  templateUrl: './detalle-arriendo.component.html',
  styleUrls: ['./detalle-arriendo.component.css']
})
export class DetalleArriendoComponent implements OnInit {


  
  idArriendo:any;
  array: any = [];  
  calificar:boolean=false;
  habilitado:boolean=false;

  arriendos : any = []
  arriendo : string = ""
  rowHeight!: string;
 favorito = {
    id: 0,
    idArr : 0,
    idUsu : 0,
    estado : false
  }

  st1:boolean=false;
  st2:boolean=false;
  st3:boolean=false;
  st4:boolean=false;
  st5:boolean=false;
  calificacion:any=[];
  calif:number=0;
  calificaciones:any=[];
  promedio:number=0;
  private usuario : any
  formCalificacion={
    id:0,
    idArr : 0,
    idUsu : 0,
    calificacion : 0
  };

  constructor(private apiArriendo : ApiArriendosService,
              private breakpointObserver: BreakpointObserver,
              private apiFavorito : FavoritosService,
              private route:Router,
              private activatedRoute : ActivatedRoute,
              private apiCalificacion:ApiCalificacionesService) { 
  
    this.idArriendo = this.activatedRoute.snapshot.paramMap.get('id');
    this.usuario = JSON.parse(localStorage.getItem('usuario')!.toString());

   }

  ngOnInit(): void {
    this.idArriendo=this.activatedRoute.snapshot.paramMap.get('id');
    this.cargarArriendos(this.idArriendo)
    this.cargarCalificacion();
  }


  cargarArriendos(id:number){
    this.apiArriendo.obtenerArriendoPorId(id).subscribe((data) => {
        this.array = data; 
      }
    );
  }

  cargarCalificacion(){
    this.apiCalificacion.getCalificacionesByIdArriendo(this.idArriendo).subscribe((data) => {
        if(data.length==0){
          
        }else{
          this.calificacion = data;  
          this.calificaciones = data;
          this.filtrarCalificacion();
          this.promediarCalificacion();
        }
      }
    );
  }

  filtrarCalificacion(){
    this.calificacion = this.calificacion.filter((calificacion:any) => calificacion.idUsu == this.usuario.idUsu);
    if(this.calificacion.length==0){
    }else{
    this.setearDatos();
      this.habilitar();
  }
  }

  promediarCalificacion(){
    this.promedio=0;
    for(let i=0; i<this.calificaciones.length; i++){
      this.promedio=this.promedio+this.calificaciones[i].calificacion;
    }
    this.promedio=this.promedio/this.calificaciones.length;
  }

  setearDatos(){
    this.formCalificacion={
      id:this.calificacion[0].id,
      idArr : this.calificacion[0].idArr,
      idUsu : this.calificacion[0].idUsu,
      calificacion : this.calificacion[0].calificacion
    };
    this.checkCalificacion();
  }

  onClickCalificar1(){
    this.st1=true;
    this.st2=false;
    this.st3=false;
    this.st4=false;
    this.st5=false;
    this.formCalificacion.calificacion=1;
    this.apiCalificacion.putCalificaciones(this.formCalificacion.id,this.formCalificacion).subscribe((data) => {
      this.recargar();
    })
  }

  onClickCalificar2(){
    this.st1=true;
    this.st2=true;
    this.st3=false;
    this.st4=false;
    this.st5=false;
    this.formCalificacion.calificacion=2;
    this.apiCalificacion.putCalificaciones(this.formCalificacion.id,this.formCalificacion).subscribe((data) => {
      this.recargar();
    })
  }

  onClickCalificar3(){
    this.st1=true;
    this.st2=true;
    this.st3=true;
    this.st4=false;
    this.st5=false;
    this.formCalificacion.calificacion=3;
    this.apiCalificacion.putCalificaciones(this.formCalificacion.id,this.formCalificacion).subscribe((data) => {
      this.recargar();
    })
  }

  onClickCalificar4(){
    this.st1=true;
    this.st2=true;
    this.st3=true;
    this.st4=true;
    this.st5=false;
    this.formCalificacion.calificacion=4;
    this.apiCalificacion.putCalificaciones(this.formCalificacion.id,this.formCalificacion).subscribe((data) => {
      this.recargar();
    })
  }

  onClickCalificar5(){
    this.st1=true;
    this.st2=true;
    this.st3=true;
    this.st4=true;
    this.st5=true;
    this.formCalificacion.calificacion=5;
    this.apiCalificacion.putCalificaciones(this.formCalificacion.id,this.formCalificacion).subscribe((data) => {
      this.recargar();
    })
  }

  quitar(){
    this.st1=false;
    this.formCalificacion.calificacion=0;
    this.apiCalificacion.putCalificaciones(this.formCalificacion.id,this.formCalificacion).subscribe((data) => {
      this.recargar();
    })
  }

  recargar(){
    window.location.reload();
  }

  habilitar(){
    this.habilitado=true;
  }

  checkCalificacion(){
    if(this.formCalificacion.calificacion==0){
     this.st1=false;
     this.st2=false;
      this.st3=false;
      this.st4=false;
      this.st5=false;
    }else if(this.formCalificacion.calificacion==1){
      this.st1=true;
      this.st2=false;
      this.st3=false;
      this.st4=false;
      this.st5=false;
    }else if(this.formCalificacion.calificacion==2){
      this.st1=true;
      this.st2=true;
      this.st3=false;
      this.st4=false;
      this.st5=false;
    }else if(this.formCalificacion.calificacion==3){
      this.st1=true;
      this.st2=true;
      this.st3=true;
      this.st4=false;
      this.st5=false;
    }else if(this.formCalificacion.calificacion==4){
      this.st1=true;
      this.st2=true;
      this.st3=true;
      this.st4=true;
      this.st5=false;
    }else{
      this.st1=true;
      this.st2=true;
      this.st3=true;
      this.st4=true;
      this.st5=true;
    }
  }

  agregarAFavoritos(){
    this.favorito.idArr = this.idArriendo;
    this.favorito.idUsu = this.usuario.idUsu;
    this.apiFavorito.existeFavorito(this.favorito).subscribe(
      (data) => {
        if(data){
          this.favorito.estado = true;
          this.favorito.id = data.id;
          this.apiFavorito.editarFavorito(this.favorito.id, this.favorito).subscribe(
            data => {
              alert('Arriendo agregado a favoritos')
            }
          )
        }else{
          //Nuevo favorito
          this.favorito.estado = true;
          this.apiFavorito.addFavorito(this.favorito).subscribe(
            (data) => {
              if(data != null){
                alert('Arriendo agregado a favoritos')
              }
            }
          )
        }

      }
    )
  }
}
  
