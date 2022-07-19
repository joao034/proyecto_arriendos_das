import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { relativeTimeThreshold } from 'moment';
import { ArriendoI } from 'src/app/models/arriendo.interface';
import { ApiArriendosService } from 'src/app/services/api-arriendos.service';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-tabla-favoritos',
  templateUrl: './tabla-favoritos.component.html',
  styleUrls: ['./tabla-favoritos.component.css']
})
export class TablaFavoritosComponent implements OnInit {

  favoritos : any = [];
  arriendos : any = [];
  private usuario: any;
  private idArriendo: number = 1;


  constructor(private router : Router, private apiFavoritos : FavoritosService, private apiArriendo : ApiArriendosService) { 
    this.usuario = JSON.parse(localStorage.getItem('usuario')!.toString());
  }

  ngOnInit(): void {
    this.obtenerFavoritos();
  }

  obtenerFavoritos(){
    this.apiFavoritos.getFavoritosByUser(this.usuario.idUsu).subscribe(
      (data) => {
        //Obtengo los favoritos del usuario
        this.favoritos = data
        for (var val of this.favoritos) {
          this.apiArriendo.obtenerArriendoPorId(val.idArr).subscribe(
            (arriendo) => {
              this.arriendos.push(arriendo);
            }
          )
        }
      }
    )

  }

}