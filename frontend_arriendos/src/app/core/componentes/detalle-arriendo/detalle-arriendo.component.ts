import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArriendoI } from 'src/app/models/arriendo.interface';
import { ApiArriendosService } from 'src/app/services/api-arriendos.service';
import { CargarAnunciosService } from 'src/app/services/cargar-anuncios.service';

@Component({
  selector: 'app-detalle-arriendo',
  templateUrl: './detalle-arriendo.component.html',
  styleUrls: ['./detalle-arriendo.component.css']
})
export class DetalleArriendoComponent implements OnInit {

  
  idArriendo:any;
  array: any = [];  
  

  constructor(private apiArriendo : ApiArriendosService, private route:Router, private activateRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.idArriendo=this.activateRoute.snapshot.paramMap.get('id');
    this.cargarArriendos(this.idArriendo)
  }


  cargarArriendos(id:number){
    this.apiArriendo.obtenerArriendoPorId(id).subscribe((data) => {
        this.array = data;               
      }
    );
  }

}


  
