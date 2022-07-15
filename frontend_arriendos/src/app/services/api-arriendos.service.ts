import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArriendoI} from '../models/arriendo.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiArriendosService {

  private url = environment.url

  constructor(private http : HttpClient) { }

  listarArriendos() : Observable<any>{
    return this.http.get(`${this.url}/listaarriendos`)
  }

  insertarArriendo(arriendo : ArriendoI) : Observable<any>{
    return this.http.post(`${this.url}/arriendoes`, arriendo)
  }

  editarArriendo(id: number, arriendo: ArriendoI): Observable<any>{
    return this.http.put(`${this.url}/arriendoes/${id}`, arriendo)
  }

  eliminarArriendo(id : number){
    return this.http.delete(`${this.url}/arriendoes/${id}`)
  }

  subirImagen(formData: any): Observable<any>{
    return this.http.post(`${this.url}/detalleImagenes/upload`, formData)
  }

  obtenerArriendoPorId(id : number): Observable<any>{
    return this.http.get(`${this.url}/listaArriendos/idArriendo/${id}`)
  }

}
