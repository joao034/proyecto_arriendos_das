import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiArriendosService } from 'src/app/services/api-arriendos.service';
import { CargarAnunciosService } from 'src/app/services/cargar-anuncios.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  arriendos : any = [];
  arriendo : string = "";
  public info:any;
  
  recogerBusqueda($event:any){
    this.info = $event;
    this.apiAnuncios.busquedaAnuncios(this.info).subscribe(anuncios=>{
      this.arriendos = anuncios;
      //console.log(this.arriendos);
    });
  }

  constructor(private apiArriendo : ApiArriendosService,
              private apiAnuncios:CargarAnunciosService,
              private router : Router) { }

  ngOnInit(): void {
    this.cargarArriendos()
  }

  cargarArriendos(){
    this.apiArriendo.listarArriendos().subscribe(
      (data) => {
        this.arriendos = data
        console.log(this.arriendos)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  redireccionDetalleArriendo(idArr : number){
    this.router.navigate(['/detalle-arriendo/', idArr]);
  }

}
