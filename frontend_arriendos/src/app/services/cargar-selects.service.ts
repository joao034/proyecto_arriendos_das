import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarSelectsService {

  constructor(private http:HttpClient) {
  }

  cargarProvincias(){
    return this.http.get('http://localhost:26951/api/provincias');
  }

  cargarCantones(){
    return this.http.get('http://localhost:26951/api/ciudads');
  }

  cargarTipoArriendos(){
    return this.http.get('http://localhost:26951/api/TipoArriendoes')
  }

}
