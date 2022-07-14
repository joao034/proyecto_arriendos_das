import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetalleArriendoComponent } from './core/componentes/detalle-arriendo/detalle-arriendo.component';
import { BuscarArriendoComponent } from './pages/buscar-arriendo/buscar-arriendo.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ListaArriendosComponent } from './pages/lista-arriendos/lista-arriendos.component';
import { LoginComponent } from './pages/login/login.component';
import { PageEditarArriendoComponent } from './pages/page-editar-arriendo/page-editar-arriendo.component';
import { PageNuevoArriendoComponent } from './pages/page-nuevo-arriendo/page-nuevo-arriendo.component';
import { PageTusAnunciosComponent } from './pages/page-tus-anuncios/page-tus-anuncios.component';
import { SiginComponent } from './pages/sigin/sigin.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'login',component:LoginComponent},
  {path:'signin',component:SiginComponent},
  { path: '', component: LandingPageComponent },

  {
    path: 'arriendos',
    component: ListaArriendosComponent,
    loadChildren: () =>
      import('./arriendos/arriendos.module').then((m) => m.ArriendosModule),
  },
  {path:'buscar-arriendo',component:BuscarArriendoComponent},
  {path:'nuevo-arriendo',component:PageNuevoArriendoComponent},
  {path:'tus-anuncios',component:PageTusAnunciosComponent},
  {path:'detalle-arriendo', component:DetalleArriendoComponent},
  {path:'editar-arriendo',component: PageEditarArriendoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
