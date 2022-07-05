import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardArriendoComponent } from './components/card-arriendo/card.component';
import { ContainerArriendoComponent } from './components/container-arriendo/container.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ContainerArriendoComponent,
    CardArriendoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]

})
export class ArriendosModule { }
