import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetalleArriendoComponent } from './core/componentes/detalle-arriendo/detalle-arriendo.component';
import { BuscarArriendoComponent } from './pages/buscar-arriendo/buscar-arriendo.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ListaArriendosComponent } from './pages/lista-arriendos/lista-arriendos.component';
import { LoginComponent } from './pages/login/login.component';
import { PageEditarArriendoComponent } from './pages/page-editar-arriendo/page-editar-arriendo.component';

import { PageEditarUsuarioComponent } from './pages/page-editar-usuario/page-editar-usuario.component';
import { PageMostrarUsuariosComponent } from './pages/page-mostrar-usuarios/page-mostrar-usuarios.component';

import { PageMesComponent } from './pages/page-mes/page-mes.component';

import { PageNuevoArriendoComponent } from './pages/page-nuevo-arriendo/page-nuevo-arriendo.component';
import { PageReportesComponent } from './pages/page-reportes/page-reportes.component';
import { PageTipoComponent } from './pages/page-tipo/page-tipo.component';
import { PageTusAnunciosComponent } from './pages/page-tus-anuncios/page-tus-anuncios.component';
import { SiginComponent } from './pages/sigin/sigin.component';
import { GuardGuard } from './guard.guard';
import { PageFavoritosComponent } from './pages/page-favoritos/page-favoritos.component';
import { PageCalificacionesComponent } from './pages/page-calificaciones/page-calificaciones.component';

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
      canActivate:[GuardGuard],
  },
  {path:'buscar-arriendo',component:BuscarArriendoComponent},
  {path:'nuevo-arriendo',
  component:PageNuevoArriendoComponent,
  canActivate:[GuardGuard]},
  
  {path:'tus-anuncios',
  component:PageTusAnunciosComponent,
  canActivate:[GuardGuard],

},
  {path:'detalle-arriendo/:id', component:DetalleArriendoComponent},
  {path:'editar-arriendo/:id',
  component: PageEditarArriendoComponent,
  canActivate:[GuardGuard]},
  

  {path:'editar-usuario/:id',
  component:PageEditarUsuarioComponent,
  canActivate:[GuardGuard]},

  {path:'usuarios', component:PageMostrarUsuariosComponent},

  {path:'reportes',
  component:PageReportesComponent,
  canActivate:[GuardGuard],},

  {path:'reportes/mes',
  component:PageMesComponent,
  canActivate:[GuardGuard],},

  {path:'reportes/tipo',
  component:PageTipoComponent,
  canActivate:[GuardGuard],},

  {path:'favoritos',
   component: PageFavoritosComponent,
   canActivate:[GuardGuard],
  }
  ,
  {path:'calficacion/:id',component:PageCalificacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
