import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  constructor(private http : HttpClient) { }

  getFavoritosByUser(idUsurio : number) : Observable<any> {
    return this.http.get(`${environment.url}/favoritos/idUsuario/${idUsurio}`);
  }

  addFavorito(favorito : any) : Observable<any> {
    return this.http.post(`${environment.url}/favoritos`, favorito);
  }
  
  deleteFavorito(id : number) : Observable<any> {
    return this.http.delete(`${environment.url}/favoritos/${id}`);
  }

  existeFavorito(favorito : any) : Observable<any>{
    return this.http.post(`${environment.url}/favoritos/existe`, favorito);
  }

  editarFavorito(idFav : number, favorito : any) : Observable<any> {
    return this.http.put(`${environment.url}/favoritos/${idFav}`, favorito);
  }

}
