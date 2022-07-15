import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CargarAnunciosService {
  constructor(private http: HttpClient) {}

  cargarAnuncios() {
    return this.http.get('http://localhost:26951/api/ListaArriendos');
  }

  cargarAnunciosByUser(id: number) {
    return this.http.get('http://localhost:26951/api/ListaArriendos/' + id);
  }

  busquedaAnuncios(busqueda: any) {
    const y = JSON.parse(busqueda);
    const x = {
      tipoArr: y['idTipArr'],
      numHab: y['numHab'],
      numBanos: y['numBanos'],
      idCiu: y['idCiu'],
      idPro: y['idPro'],
      mascota: y['mascota'],
    };
    return this.http.post(
      'http://localhost:26951/api/ListaArriendos/busqueda',
      JSON.parse(JSON.stringify(x))
    );
  }
}
