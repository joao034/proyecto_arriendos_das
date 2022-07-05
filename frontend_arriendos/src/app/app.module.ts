import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InformacionNosotrosComponent } from './components/informacion-nosotros/informacion-nosotros.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CardComponent } from './components/card/card.component';
import { ContenedorCardComponent } from './components/contenedor-card/contenedor-card.component';
import { HttpClientModule} from '@angular/common/http';
import { ArriendosModule } from './arriendos/arriendos.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InformacionNosotrosComponent,
    InicioSesionComponent,
    LandingPageComponent,
    CardComponent,
    ContenedorCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
