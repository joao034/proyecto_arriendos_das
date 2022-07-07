import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/componentes/header/header.component';
import { FooterComponent } from './core/componentes/footer/footer.component';
import { InformacionNosotrosComponent } from './core/componentes/informacion-nosotros/informacion-nosotros.component';
import { InicioSesionComponent } from './core/componentes/inicio-sesion/inicio-sesion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CardComponent } from './core/componentes/card/card.component';
import { ContenedorCardComponent } from './core/componentes/contenedor-card/contenedor-card.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { SiginComponent } from './pages/sigin/sigin.component';
import { CrearCuentaComponent } from './core/componentes/crear-cuenta/crear-cuenta.component';
import { BuscarArriendoComponent } from './pages/buscar-arriendo/buscar-arriendo.component';
import { BusquedaArriendoComponent } from './core/componentes/busqueda-arriendo/busqueda-arriendo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InformacionNosotrosComponent,
    InicioSesionComponent,
    LandingPageComponent,
    CardComponent,
    ContenedorCardComponent,
    LoginComponent,
    SiginComponent,
    CrearCuentaComponent,
    BuscarArriendoComponent,
    BusquedaArriendoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
