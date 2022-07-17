import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiUsuariosService {

  private url = environment.url

  constructor(private http : HttpClient) { }

  listarUsuarios() : Observable<any>{
    return this.http.get(`${this.url}/usuarios`)
  }

  editarUsuario(id: number, usuario: any): Observable<any>{
    return this.http.put(`${this.url}/Usuarios/${id}`, usuario)
  }

  obtenerUsuarioPorId(id : number): Observable<any>{
    return this.http.get(`${this.url}/usuarios/${id}`)
  }

  eliminarUsuario(id : number){
    return this.http.delete(`${this.url}/usuarios/${id}`)
  }

}
