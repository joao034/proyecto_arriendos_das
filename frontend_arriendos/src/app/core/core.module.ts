import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { GridArriendosComponent } from './componentes/grid-arriendos/grid-arriendos.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    GridArriendosComponent
  ],
  imports: [CommonModule, MaterialModule],


@NgModule({
  declarations: [
  ],
  imports: [CommonModule, MaterialModule,MatSelectModule,MatFormFieldModule],
  exports: [],
})
export class CoreModule {}
