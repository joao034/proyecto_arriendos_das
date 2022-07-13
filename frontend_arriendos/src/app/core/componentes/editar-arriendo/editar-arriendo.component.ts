import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FotoI } from 'src/app/models/foto.interface';
import { ApiArriendosService } from 'src/app/services/api-arriendos.service';
import { CargarSelectsService } from 'src/app/services/cargar-selects.service';

@Component({
  selector: 'app-editar-arriendo',
  templateUrl: './editar-arriendo.component.html',
  styleUrls: ['./editar-arriendo.component.css']
})
export class EditarArriendoComponent implements OnInit {

  //formEditarArriendo : FormGroup
  provincias : any = []
  tipoArriendos : any = []
  cantones : any = []

  nuevoArriendo : boolean = false
  private fileToUpload: File | undefined;
  private imagen : FotoI = {} as FotoI;

  constructor(private apiSelects : CargarSelectsService, private apiArriendo : ApiArriendosService) { }

  ngOnInit(): void {
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

}
