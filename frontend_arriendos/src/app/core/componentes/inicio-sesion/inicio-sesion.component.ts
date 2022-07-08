import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
})
export class InicioSesionComponent implements OnInit {
  
  errorLogin:boolean=false;

  loginForm = new FormGroup({
    usernameUsu: new FormControl('', Validators.required),
    passwordUsu: new FormControl('', Validators.required),
  });

  constructor(private login:LoginService,private route:Router) {}

  ngOnInit(): void {}

  onLogin(form: any) {
    this.login.loginByUser(form).subscribe(usuario=> {
      if(usuario!=null){
        localStorage.setItem('usuario',JSON.stringify(usuario));
        this.route.navigate(['/']);
      }else{
        this.errorLogin=true;
      }
    })
  }
}
