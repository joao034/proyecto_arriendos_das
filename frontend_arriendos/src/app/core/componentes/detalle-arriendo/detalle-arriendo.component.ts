import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ApiArriendosService } from 'src/app/services/api-arriendos.service';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-detalle-arriendo',
  templateUrl: './detalle-arriendo.component.html',
  styleUrls: ['./detalle-arriendo.component.css']
})
export class DetalleArriendoComponent implements OnInit {

  arriendos : any = []
  arriendo : string = ""
  rowHeight!: string;
  private favorito = {
    idArriendo : 0,
    idUsuario : 0
  }

  constructor(private apiArriendo : ApiArriendosService,
              private breakpointObserver: BreakpointObserver,
              private apiFavorito : FavoritosService) { }

  ngOnInit(): void {
    this.rowHeight = '80vh';
    this.cargarArriendos()
    this.detectBreakpoint()
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

  private detectBreakpoint(): void {
    this.breakpointObserver.observe(['(max-width: 500px)']).subscribe(result => {
      this.rowHeight = result.matches ? '100vh' : '80vh';
    });
  }

  agregarAFavoritos(){
    this.apiFavorito.addFavorito(this.favorito).subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

  obtenerIdArriendo(){
    
  }

}
