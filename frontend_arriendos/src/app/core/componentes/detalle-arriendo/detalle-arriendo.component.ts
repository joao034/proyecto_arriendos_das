import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ArriendoI } from 'src/app/models/arriendo.interface';
import { ApiArriendosService } from 'src/app/services/api-arriendos.service';
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
  

  arriendos : any = []
  arriendo : string = ""
  rowHeight!: string;
  private favorito = {
    idArr : 0,
    idUsu : 0,
    estado : false
  }

  private usuario : any

  constructor(private apiArriendo : ApiArriendosService,
              private breakpointObserver: BreakpointObserver,
              private apiFavorito : FavoritosService,
              private route:Router,
              private activatedRoute : ActivatedRoute) { 
  
    this.idArriendo = this.activatedRoute.snapshot.paramMap.get('id');
    this.usuario = JSON.parse(localStorage.getItem('usuario')!.toString());


   }

  ngOnInit(): void {
    this.idArriendo=this.activatedRoute.snapshot.paramMap.get('id');
    this.cargarArriendos(this.idArriendo)
  }


  cargarArriendos(id:number){
    this.apiArriendo.obtenerArriendoPorId(id).subscribe((data) => {
        this.array = data;               
      }
    );
  }


  agregarAFavoritos(){
    this.favorito.idArr = this.idArriendo;
    this.favorito.idUsu = this.usuario.idUsu;
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
  
