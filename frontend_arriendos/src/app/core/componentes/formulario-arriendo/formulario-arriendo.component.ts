import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { ArriendoI } from 'src/app/models/arriendo.interface';
import { FotoI } from 'src/app/models/foto.interface';
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
  tipoArriendos: any = [];
  logueado: boolean = true;

  formArriendo: FormGroup;
  private arriendo: ArriendoI = {} as ArriendoI;
  fileToUpload: File | undefined;
  imagen : FotoI = {} as FotoI;

  resultadoNuevoArriendo: any;

  private usuario: any;

  //atributos imagen
  //public mensaje: string;
  //public progeso: number;
  @Output() public cargarImagen = new EventEmitter<any>();

  constructor(
    private apiSelects: CargarSelectsService,
    private apiArriendo: ApiArriendosService
  ) {
    this.usuario = JSON.parse(localStorage.getItem('usuario')!.toString());
    this.formArriendo = new FormGroup({
      //titulo: new FormControl(''),
      tipoArriendo: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      imagen: new FormControl('', Validators.required),
      //informacion arriendo
      numHabitaciones: new FormControl(''),
      numBanos: new FormControl(''),
      idProvincia: new FormControl('', Validators.required),
      idCanton: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      superficie: new FormControl(''),
      //informacion extra
      garage: new FormControl(''),
      amueblado: new FormControl(''),
      mascotas: new FormControl(''),
      //compartido: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.checkLocalStorage();
    this.cargarProvincias();
    this.cargarTipoArriendos();
  }

  checkLocalStorage() {
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario')!.toString());
      console.log(this.usuario.usernameUsu);
      this.logueado = false;
    } else {
      this.logueado = true;
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

  //llamada del metodo en el boton crear anuncio
  insertarArriendo() {
    this.inicializarDatosArriendo();
    console.log('imagen => ', this.imagen);
    console.log('arriendo => ', this.arriendo);

    this.guardarArriendoCabecera();
  }

  guardarArriendoCabecera(){
    this.apiArriendo.insertarArriendo(this.arriendo).subscribe((arriendo) => {
      console.log('Respuesta => ', arriendo);
    });
  }

  //Captura el archivo que se seleccione
  /*capturarArchivo(event: any): any {
    this.imagenSeleccionada = <File>event.target.files[0];
    console.log(this.imagenSeleccionada);
  }*/

  inicializarDatosArriendo() {
    this.arriendo.tipoArr = this.formArriendo.value.tipoArriendo;
    this.arriendo.usuPro = this.usuario.idUsu;
    this.arriendo.precio = this.formArriendo.value.precio;
    this.arriendo.numHab = this.formArriendo.value.numHabitaciones;
    this.arriendo.numBanos = this.formArriendo.value.numBanos;
    this.arriendo.ciudArr = this.formArriendo.value.idCanton;
    this.arriendo.dirArr = this.formArriendo.value.direccion;
    this.arriendo.publicado = true;
    this.arriendo.superficie = this.formArriendo.value.superficie;
    this.arriendo.garage = this.formArriendo.value.garage;
    this.arriendo.descArr = this.formArriendo.value.descripcion;
    this.arriendo.chechArrendar = false;
    this.arriendo.amueblado = this.formArriendo.value.amueblado;
    this.arriendo.mascota = this.formArriendo.value.mascotas;

    this.arriendo.detalleImagenes = []
    this.arriendo.detalleImagenes.push(this.imagen);
    
  }

  public subirImagen = (files : any) => {
    if (files.length === 0) {
      return;
    }

    this.fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);
    this.imagen.imagenes = this.fileToUpload.name;

    this.apiArriendo.subirImagen(formData).subscribe( res =>{
      console.log(this.fileToUpload?.name)
    });
  };


}
