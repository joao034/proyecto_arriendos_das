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

  getCalificacionesVistaByIdArriendo(idArr:any):Observable<any>{
    return this.http.get(`${this.url}/CalificacionesVista/${idArr}`);
  }

  postCalificaciones(calificacion:any):Observable<any>{
    return this.http.post(`${this.url}/Calificaciones`,calificacion);
  }

  deleteCalificaciones(idCal:any):Observable<any>{
    return this.http.delete(`${this.url}/Calificaciones/${idCal}`);
  }

  putCalificaciones(idCal:number,calificacion:any):Observable<any>{
    return this.http.put(`${this.url}/Calificaciones/${idCal}`,calificacion);
  }

}
