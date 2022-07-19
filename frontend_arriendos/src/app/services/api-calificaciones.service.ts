import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCalificacionesService {

  private url = environment.url;

  constructor(private http:HttpClient) { }

  getCalificaciones():Observable<any>{
    return this.http.get(`${this.url}/Calificaciones`);
  }

  getCalificacionesByIdArriendo(idArr:any):Observable<any>{
    return this.http.get(`${this.url}/Calificaciones/${idArr}`);
  }

}
