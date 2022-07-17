import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  USUARIOS!: any[];

  constructor() { }

  ngOnInit(): void {
  }


  
  displayedColumns: string[] = [
    'idUsu',
    'nomUsu',
    'apeUsu',
    'fechaNacUsu',
    'telUsu',
    'tel2Usu',
    'correoUsu',
    'usernameUsu'
  ];

}
