import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiUsuariosService } from 'src/app/services/api-usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 

  editForm : FormGroup = new FormGroup({});
  fecha: any =[]

  idUser:any;
  usuario:any;

  constructor(private apiUsuario: ApiUsuariosService,
              private router:Router,
              private activateRoute: ActivatedRoute) { 

  this.idUser = this.activateRoute.snapshot.paramMap.get('id');

  this.obtenerUsuarioPorId(this.idUser);

  this.crearFormulario();
}

ngOnInit(): void {
  
}

  editarUsuario(){
    this.inicializarDatos();
    this.apiUsuario.editarUsuario(this.idUser, this.usuario).subscribe((res) => {
      console.log(res);
      if(res == null){
        alert('Usuario editado correctamente');
        this.router.navigate(['/usuarios']);
      }
    });
  }

  inicializarDatos(){
    this.usuario.nomUsu = this.editForm.value.nomUsu;
    this.usuario.apeUsu = this.editForm.value.apeUsu;
    this.usuario.fechaNacUsu = this.editForm.value.fechaNacUsu;
    this.usuario.telUsu = this.editForm.value.telUsu;
    this.usuario.tel2Usu = this.editForm.value.tel2Usu;
    this.usuario.correoUsu = this.editForm.value.correoUsu;
    this.usuario.usernameUsu = this.editForm.value.usernameUsu;
    this.usuario.passwordUsu = this.editForm.value.passwordUsu;
    this.usuario.tipoUsu = this.editForm.value.tipoUsu;
  }

  obtenerUsuarioPorId(id:any){
    this.apiUsuario.obtenerUsuarioPorId(id).subscribe((res) => {
      this.usuario = res;
      this.editForm.setValue({
        nomUsu: this.usuario.nomUsu,
        apeUsu: this.usuario.apeUsu,
        fechaNacUsu: this.usuario.fechaNacUsu,
        telUsu: this.usuario.telUsu,
        tel2Usu: this.usuario.tel2Usu,
        correoUsu: this.usuario.correoUsu,
        usernameUsu: this.usuario.usernameUsu,
        passwordUsu: this.usuario.passwordUsu,
        tipoUsu: this.usuario.tipoUsu,
      });
    });
  }

  
  crearFormulario(){
    this.editForm = new FormGroup({
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
  }

  volver(){
    this.router.navigate(['/usuarios']);
  }

  


  
  

}
