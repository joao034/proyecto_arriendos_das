import { Component, Input, OnInit } from '@angular/core';
import { ApiArriendosService } from 'src/app/services/api-arriendos.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  arriendos : any = [];
  arriendo : string = "";
  public info:any;
  
  recogerBusqueda($event:any){
    this.info = $event;
    console.log('Hijo 2 = Info recibida => ');
    console.log(JSON.parse(this.info));
  }

  constructor(private apiArriendo : ApiArriendosService) { }

  ngOnInit(): void {
    this.cargarArriendos()
  }

  cargarArriendos(){
    this.apiArriendo.listarArriendos().subscribe(
      (data) => {
        this.arriendos = data
        console.log(this.arriendos)
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
