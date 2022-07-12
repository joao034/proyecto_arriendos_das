import { Component, OnInit } from '@angular/core';
import { CardComponent } from 'src/app/core/componentes/card/card.component';

@Component({
  selector: 'app-buscar-arriendo',
  templateUrl: './buscar-arriendo.component.html',
  styleUrls: ['./buscar-arriendo.component.css'],
  providers:[CardComponent]
})
export class BuscarArriendoComponent implements OnInit {

  constructor(private busquedaP:CardComponent) { }


  ngOnInit(): void {
  }

}
