import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCrearUsuarioService {

  private url = environment.url;

  constructor(private http:HttpClient) { }

  createUser(user:any):Observable<any>{
    return this.http.post(`${this.url}/Usuarios`,user);
  }

  getUsers():Observable<any>{
    return this.http.get(`${this.url}/Usuarios`);
  }

}
