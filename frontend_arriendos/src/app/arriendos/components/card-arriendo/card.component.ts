import { Component, OnInit } from '@angular/core';
import { ApiArriendosService } from 'src/app/services/api-arriendos.service';

@Component({
  selector: 'app-card-arriendo',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardArriendoComponent implements OnInit {

  lista_arriendos : any

  constructor(private api_arriendos : ApiArriendosService) { }

  ngOnInit(): void {
    this.cargarListaArriendos()
  }

  cargarListaArriendos(){
    this.api_arriendos.listarArriendos().subscribe(
      (data) => {
        this.lista_arriendos = data
        console.log(data)
      }
    )
  }



}
