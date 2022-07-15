import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  
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


  constructor() { }

  ngOnInit(): void {
  }


  
  

}
