import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DetalleArriendoComponent } from './componentes/detalle-arriendo/detalle-arriendo.component';

@NgModule({
  declarations: [
  ],
  imports: [CommonModule, 
    MaterialModule,
    MatSelectModule,
    MatFormFieldModule
    ],
  exports: [],
})
export class CoreModule {}
