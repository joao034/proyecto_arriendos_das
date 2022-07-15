import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FotoI } from 'src/app/models/foto.interface';
import { ApiArriendosService } from 'src/app/services/api-arriendos.service';
import { CargarSelectsService } from 'src/app/services/cargar-selects.service';

@Component({
  selector: 'app-edit-arriendo',
  templateUrl: './edit-arriendo.component.html',
  styleUrls: ['./edit-arriendo.component.css']
})
export class EditArriendoComponent implements OnInit {

  formEditarArriendo : FormGroup
  provincias : any = []
  tipoArriendos : any = []
  cantones : any = []

  nuevoArriendo : boolean = false
  private fileToUpload: File | undefined;
  private imagen : FotoI = {} as FotoI;
  private idArriendo : any;
  

  constructor(private apiSelects : CargarSelectsService, 
              private apiArriendo : ApiArriendosService, 
              private activatedRoute : ActivatedRoute) {

    //capturo el id del arriendo que se quiere editar
    this.idArriendo = this.activatedRoute.snapshot.paramMap.get('id');

    this.formEditarArriendo = new FormGroup({
      idArr           : new FormControl('', Validators.required),
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
    this.cargarProvincias();
    this.cargarTipoArriendos();
    this.obtenerArriendoPorId(this.idArriendo);
  }

  editarArriendo(){}

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

  obtenerArriendoPorId(id : number){
    this.apiArriendo.obtenerArriendoPorId(id).subscribe((arriendo) => {
      console.log(arriendo)
    });

  }

}
