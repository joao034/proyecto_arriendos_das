import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BuscarArriendoComponent } from './pages/buscar-arriendo/buscar-arriendo.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNuevoArriendoComponent } from './pages/page-nuevo-arriendo/page-nuevo-arriendo.component';
import { PageTusAnunciosComponent } from './pages/page-tus-anuncios/page-tus-anuncios.component';
import { SiginComponent } from './pages/sigin/sigin.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'login',component:LoginComponent},
  {path:'signin',component:SiginComponent},
  {path:'buscar-arriendo',component:BuscarArriendoComponent},
  {path:'nuevo-arriendo',component:PageNuevoArriendoComponent},
  {path:'tus-anuncios',component:PageTusAnunciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
