import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditarArriendoComponent } from './componentes/editar-arriendo/editar-arriendo.component';

@NgModule({
  declarations: [
  
    EditarArriendoComponent
  ],
  imports: [CommonModule, MaterialModule,MatSelectModule,MatFormFieldModule],
  exports: [],
})
export class CoreModule {}
