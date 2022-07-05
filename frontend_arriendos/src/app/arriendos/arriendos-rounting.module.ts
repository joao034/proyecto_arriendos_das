import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteConfigLoadEnd, RouterModule, Routes } from '@angular/router';
import { ListaArriendosComponent } from '../pages/lista-arriendos/lista-arriendos.component';
import { CrearArriendoComponent } from './components/crear-arriendo/crear-arriendo.component';
import { EditarArriendoComponent } from './components/editar-arriendo/editar-arriendo.component';

const routes : Routes = [
  {path:'' , component: ListaArriendosComponent},
  {path:'crear-arriendo', component: CrearArriendoComponent},
  {path:'editar-arriendo/:id', component: EditarArriendoComponent},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ArriendosRountingModule { }
