import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router) { }

  logueado:boolean=true;
  usuario:any;
  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('usuario')){
      this.usuario=JSON.parse(localStorage.getItem('usuario')!.toString());
      console.log(this.usuario.usernameUsu);
      this.logueado=false;
    }else{
      this.logueado=true;
    }
  }

  onClickLogout(){
    localStorage.removeItem('usuario');
    this.logueado=true;
    this.route.navigate(['/']);
  }

 
}
