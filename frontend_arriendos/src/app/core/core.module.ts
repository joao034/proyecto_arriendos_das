import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { GridArriendosComponent } from './componentes/grid-arriendos/grid-arriendos.component';

@NgModule({
  declarations: [
    GridArriendosComponent
  ],
  imports: [CommonModule, MaterialModule],
  exports: [],
})
export class CoreModule {}
