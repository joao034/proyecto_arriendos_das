import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  favorito = {
    id : 0,
    idArr: 0,
    idUsu: 0,
    estado: false
  }


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

  redireccionarDetalleArriendo(idArr : any){
    this.router.navigate(['/detalle-arriendo/', idArr]);
  }

  quitarFavorito(idArr: number){
    this.favorito.idArr = idArr;
    this.favorito.idUsu = this.usuario.idUsu;

    this.apiFavoritos.existeFavorito(this.favorito).subscribe( 
      (data) => {
        this.favorito.id = data.id;
        this.favorito.estado = false;
        this.apiFavoritos.editarFavorito(this.favorito.id, this.favorito).subscribe( 
          (data) => {
            if(data == null){
              alert('Se quitó el arriendo de favoritos');
            }else
              alert('No se pudo quitar el arriendo de favoritos');
          });
    });

  }
}