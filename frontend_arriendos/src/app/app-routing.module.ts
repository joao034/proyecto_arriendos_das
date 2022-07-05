import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ListaArriendosComponent } from './pages/lista-arriendos/lista-arriendos.component';
import { LoginComponent } from './pages/login/login.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
