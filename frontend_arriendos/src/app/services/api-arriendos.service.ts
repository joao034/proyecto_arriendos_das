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

  insertarArriendo(arriendo : ArriendoI){
    return this.http.post(`${this.url}/arriendoes`, arriendo)
  }

  editarArriendo(){
    
  }

  eliminarArriendo(){
    
  }


}
