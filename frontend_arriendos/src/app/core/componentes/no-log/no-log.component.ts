import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-log',
  templateUrl: './no-log.component.html',
  styleUrls: ['./no-log.component.css']
})
export class NoLogComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onClickLogin(){
    this.route.navigate(['/login']);
  }

}
