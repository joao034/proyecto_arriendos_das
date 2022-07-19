import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArriendoI } from 'src/app/models/arriendo.interface';
import { FotoI } from 'src/app/models/foto.interface';
import { ApiArriendosService } from 'src/app/services/api-arriendos.service';
import { ApiCrearUsuarioService } from 'src/app/services/api-crear-usuario.service';
import { CargarSelectsService } from 'src/app/services/cargar-selects.service';

@Component({
  selector: 'app-edit-arriendo',
  templateUrl: './edit-arriendo.component.html',
  styleUrls: ['./edit-arriendo.component.css']
})
export class EditArriendoComponent implements OnInit {

  formEditarArriendo : FormGroup = new FormGroup({});
  provincias : any = []
  tipoArriendos : any = []
  cantones : any = []

  arriendoEditado : boolean = false
  private fileToUpload: File | undefined;
  private imagen : FotoI = {} as FotoI;
  private idArriendo : any;
  private arriendo : any
  admin:boolean=false;
  usuarios:any=[];
  usuario:any;
  logueado:boolean=false;

  tituloPublicar : string = ""


  constructor(private apiSelects : CargarSelectsService, 
              private apiArriendo : ApiArriendosService, 
              private activatedRoute : ActivatedRoute,
              private router : Router,private apiUsuarios:ApiCrearUsuarioService) {

    //capturo el id del arriendo que se quiere editar
    this.idArriendo = this.activatedRoute.snapshot.paramMap.get('id');
    this.obtenerArriendoPorId(this.idArriendo);
    
    this.crearFormulario();

  }

  ngOnInit(): void {
    this.checkLocalStorage();
    this.cargarUsuarios();
    this.cargarProvincias();
    this.cargarTipoArriendos();
    this.cargarCantones();
  }

  checkLocalStorage() {
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario')!.toString());
      this.logueado = false;
      if(this.usuario.idUsu==2){
        this.admin = true;
      }else{
        this.admin = false;
      }
    } else {
      this.logueado = true;
    }
  }

  cargarUsuarios(){
    this.apiUsuarios.getUsers().subscribe((usuarios) => {
     this.usuarios = usuarios;
     this.usuarios=this.usuarios.filter((usuario:any)=>usuario.tipoUsu==2);
    }
    );
  }

  editarArriendo(){
    this.inicializarDatos();
    console.log(this.arriendo);
    this.apiArriendo.editarArriendo(this.idArriendo, this.arriendo).subscribe((res) => {
      console.log(res);
      if(res == null){
        this.arriendoEditado = true;
        alert('Arriendo editado correctamente');
        this.router.navigate(['/tus-anuncios']);
      }
    });
  }

  cargarProvincias() {
    this.apiSelects.cargarProvincias().subscribe((provincias) => {
      this.provincias = provincias;
    });
  }

  cargarCantones(){
    this.apiSelects.cargarCantones().subscribe((cantones) => {
      this.cantones = cantones;
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
      this.arriendo = arriendo;
      this.arriendo.publicado = arriendo.publicado;
      this.arriendo.publicado == true ? this.tituloPublicar = 'Despublicar' : this.tituloPublicar = 'Publicar';
      this.setearDatosFormulario();
    });

  }

  crearFormulario(){
    this.formEditarArriendo = new FormGroup({
      idArr : new FormControl('', Validators.required),
      tipoArriendo: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      //imagen: new FormControl('', Validators.required),
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

  setearDatosFormulario(){
    this.formEditarArriendo.setValue({
      idArr : this.arriendo.idArr,
      tipoArriendo: this.arriendo.tipoArr,
      precio: this.arriendo.precio,
      descripcion: this.arriendo.descArr,
      //imagen: this.arriendo.imagenes,
      //informacion arriendo
      numHabitaciones: this.arriendo.numHab,
      numBanos: this.arriendo.numBanos,
      idProvincia: this.arriendo.idPro,
      idCanton: this.arriendo.ciudArr,
      direccion: this.arriendo.dirArr,
      superficie: this.arriendo.superficie,
      //informacion extra
      garage: this.arriendo.garage,
      amueblado: this.arriendo.amueblado,
      mascotas: this.arriendo.mascota,
    });
    console.log(this.arriendo.tipoArr);
  }


  inicializarDatos(){
    this.arriendo.tipoArr = this.formEditarArriendo.value.tipoArriendo;
    this.arriendo.precio = this.formEditarArriendo.value.precio;
    this.arriendo.numHab = this.formEditarArriendo.value.numHabitaciones;
    this.arriendo.numBanos = this.formEditarArriendo.value.numBanos;
    this.arriendo.ciudArr = this.formEditarArriendo.value.idCanton;
    this.arriendo.dirArr = this.formEditarArriendo.value.direccion;
    this.arriendo.superficie = this.formEditarArriendo.value.superficie === "" ? 0 : this.formEditarArriendo.value.superficie;; 
    this.arriendo.garage = this.formEditarArriendo.value.garage === "" ? false : this.formEditarArriendo.value.garage;
    this.arriendo.descArr = this.formEditarArriendo.value.descripcion;
    this.arriendo.amueblado = this.formEditarArriendo.value.amueblado === "" ? false : this.formEditarArriendo.value.amueblado;;
    this.arriendo.mascota = this.formEditarArriendo.value.mascotas === "" ? false : this.formEditarArriendo.value.mascotas;

    //this.arriendo.detalleImagenes = []
    //this.arriendo.detalleImagenes.push(this.imagen);
    
  }
  
  publicarODespublicarArriendo(){
    this.arriendo.publicado = !this.arriendo.publicado;
    this.apiArriendo.editarArriendo(this.idArriendo, this.arriendo).subscribe((res) => {
      if(res == null){
        this.arriendo.publicado == true ? alert('Arriendo publicado') : alert('Arriendo despublicado');
        this.router.navigate(['/tus-anuncios']);
      }
    });
  }

  
}
