import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  usuario: any;
  idUsu: any;
  tipoUsu: any;

  public usuarioLogueado;

  constructor( private router : Router){
    this.usuarioLogueado = localStorage.getItem('usuario');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.usuarioLogueado === null){
        this.router.navigate(['/login']);
        return false;
      }

    return true;
  }


  
}
function checkLocalStorage() {
  throw new Error('Function not implemented.');
}

