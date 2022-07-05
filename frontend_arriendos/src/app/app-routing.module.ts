import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ListaArriendosComponent } from './pages/lista-arriendos/lista-arriendos.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },

  {
    path: 'arriendos',
    component: ListaArriendosComponent,
    loadChildren: () =>
      import('./arriendos/arriendos.module').then((m) => m.ArriendosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
