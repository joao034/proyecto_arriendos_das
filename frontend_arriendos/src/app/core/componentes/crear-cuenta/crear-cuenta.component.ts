import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiCrearUsuarioService } from 'src/app/services/api-crear-usuario.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {
  
  errorLogin:boolean=false;

  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 

  nuevoForm = new FormGroup({
    nomUsu: new FormControl('', Validators.required),
    apeUsu: new FormControl('', Validators.required),
    fechaNacUsu: new FormControl('', Validators.required),
    telUsu: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(this.mobNumberPattern)]),
    tel2Usu: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(this.mobNumberPattern)]),
    correoUsu: new FormControl('', [Validators.required, Validators.email]),
    usernameUsu: new FormControl('', Validators.required),
    passwordUsu: new FormControl('', [Validators.required, Validators.minLength(8)]),
    tipoUsu: new FormControl('2', Validators.required),
  });



  constructor(private route:Router, private userAPI:ApiCrearUsuarioService) { }

  ngOnInit(): void {
  }

  postForm(form: any) {
    console.log(form)
    this.userAPI.createUser(form).subscribe(usuario => {
      console.log(usuario);
      if(usuario!=null){
        this.route.navigate(['/login']);
      }
    })
  }
  
}
