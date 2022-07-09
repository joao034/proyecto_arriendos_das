import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarAnunciosService {

  constructor(private http:HttpClient) { }

  cargarAnuncios(){
    return this.http.get('http://localhost:26951/api/Arriendoes');
  }

}
