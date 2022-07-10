import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { ArriendoI } from 'src/app/models/arriendo.interface';
import { ApiArriendosService } from 'src/app/services/api-arriendos.service';
import { CargarSelectsService } from 'src/app/services/cargar-selects.service';

@Component({
  selector: 'app-formulario-arriendo',
  templateUrl: './formulario-arriendo.component.html',
  styleUrls: ['./formulario-arriendo.component.css'],
})
export class FormularioArriendoComponent implements OnInit {
  provincias: any = [];
  cantones: any = [];
  tipoArriendos : any = [];
  logueado:boolean=true;

  formArriendo : FormGroup;
  arriendo : ArriendoI = {} as ArriendoI;
  imagenSeleccionada : File | undefined;
  //file : File;
  private usuario : any;

  constructor(
    private apiSelects: CargarSelectsService,
    private apiArriendo: ApiArriendosService
  ) {
    this.usuario = JSON.parse(localStorage.getItem('usuario')!.toString());
    this.formArriendo = new FormGroup({
      //titulo: new FormControl(''),
      tipoArriendo : new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      imagen : new FormControl('',),
      //informacion arriendo
      numHabitaciones: new FormControl(''),
      numBanos: new FormControl(''),
      idProvincia : new FormControl('', Validators.required),
      idCanton : new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      superficie: new FormControl(''),
      //informacion extra
      garaje : new FormControl(''),
      amueblado : new FormControl(''),
      mascotas : new FormControl(''),
      //compartido: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.checkLocalStorage();
    this.cargarProvincias();
    this.cargarTipoArriendos();
    //this.usuario = JSON.stringify(this.usuario)
    //console.log(this.usuario);
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

  cargarProvincias() {
    this.apiSelects.cargarProvincias().subscribe((provincias) => {
      this.provincias = provincias;
    });
  }

  cargarTipoArriendos() {
    this.apiSelects.cargarTipoArriendos().subscribe((tipoArriendos) => {
      this.tipoArriendos = tipoArriendos;
    });
  }

  onSelectedValueChange(provincia: any) {
    this.apiSelects
      .cargarCantonesProvincia(provincia)
      .subscribe((cantonesProvincia) => {
        this.cantones = cantonesProvincia;
      });
  }

  insertarArriendo() {
    console.log(this.arriendo)
    this.inicializarDatosArriendo();
    this.apiArriendo.insertarArriendo(this.arriendo).subscribe((arriendo) => {
      console.log(arriendo);
    });
  }

  //Captura el archivo que se seleccione
  capturarArchivo(event: any): any {
    this.imagenSeleccionada = <File>event.target.files[0];
    console.log(this.imagenSeleccionada);
  }

  _handleReaderLoaded(readerEvent: any) {
    var binaryString = readerEvent.target.result;
    //this.ordenanza.archivo.base64textString = btoa(binaryString);
  }

  inicializarDatosArriendo(){
    this.arriendo.tipoArr = this.formArriendo.value.tipoArriendo;
    this.arriendo.usuPro = this.usuario.idUsu
    this.arriendo.precio = this.formArriendo.value.precio;
    this.arriendo.numHab = this.formArriendo.value.numHabitaciones;
    this.arriendo.numBanos = this.formArriendo.value.numBanos;
    this.arriendo.ciudArr =  this.formArriendo.value.idCanton;
    this.arriendo.dirArr = this.formArriendo.value.direccion;
    this.arriendo.publicado = false;
    this.arriendo.superficie = this.formArriendo.value.superficie;
    this.arriendo.garaje = this.formArriendo.value.garaje;
    this.arriendo.descArr = this.formArriendo.value.descripcion;
    this.arriendo.chechArrendar = false;
    this.arriendo.amueblado = this.formArriendo.value.amueblado;
    this.arriendo.mascota = this.formArriendo.value.mascotas;
    //this.arriendo.compartido = this.formArriendo.value.compartido
  }
}
