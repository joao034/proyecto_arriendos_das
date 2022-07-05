import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LandingPageComponent } from '../pages/landing-page/landing-page.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';

const routes : Routes = [
  {path:'' , component: LandingPageComponent},
  {path:'crear-usuario', component: CrearUsuarioComponent},
  {path:'editar-usuario/:id', component: EditarUsuarioComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsuariosRountingModule { }
