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
import { ArriendosModule } from './arriendos/arriendos.module';
import { ListaArriendosComponent } from './pages/lista-arriendos/lista-arriendos.component';

import { LoginComponent } from './pages/login/login.component';
import { SiginComponent } from './pages/sigin/sigin.component';
import { CrearCuentaComponent } from './core/componentes/crear-cuenta/crear-cuenta.component';
import { BuscarArriendoComponent } from './pages/buscar-arriendo/buscar-arriendo.component';
import { BusquedaArriendoComponent } from './core/componentes/busqueda-arriendo/busqueda-arriendo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioArriendoComponent } from './core/componentes/formulario-arriendo/formulario-arriendo.component';
import { PageNuevoArriendoComponent } from './pages/page-nuevo-arriendo/page-nuevo-arriendo.component';
import { TablaAnunciosComponent } from './core/componentes/tabla-anuncios/tabla-anuncios.component';
import { PageTusAnunciosComponent } from './pages/page-tus-anuncios/page-tus-anuncios.component';
import { PageNoLoginComponent } from './pages/page-no-login/page-no-login.component';
import { NoLogComponent } from './core/componentes/no-log/no-log.component';

//datepikcer
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import { DetalleArriendoComponent } from './core/componentes/detalle-arriendo/detalle-arriendo.component';

import {MatCardModule} from '@angular/material/card';

import { PageEditarArriendoComponent } from './pages/page-editar-arriendo/page-editar-arriendo.component';
import { EditarArriendoComponent } from './arriendos/components/editar-arriendo/editar-arriendo.component';
import { EditArriendoComponent } from './core/componentes/edit-arriendo/edit-arriendo.component';

import { EditarUsuarioComponent } from './core/componentes/editar-usuario/editar-usuario.component';
import { PageEditarUsuarioComponent } from './pages/page-editar-usuario/page-editar-usuario.component';
import { PageMostrarUsuariosComponent } from './pages/page-mostrar-usuarios/page-mostrar-usuarios.component';
import { TablaUsuariosComponent } from './core/componentes/tabla-usuarios/tabla-usuarios.component';


import { ReportesComponent } from './core/componentes/reportes/reportes.component';
import { PageReportesComponent } from './pages/page-reportes/page-reportes.component';
import { MesComponent } from './core/componentes/mes/mes.component';
import { TipoComponent } from './core/componentes/tipo/tipo.component';
import { PageMesComponent } from './pages/page-mes/page-mes.component';
import { PageTipoComponent } from './pages/page-tipo/page-tipo.component';
import { PageFavoritosComponent } from './pages/page-favoritos/page-favoritos.component';

import { CalificacionComponent } from './core/componentes/calificacion/calificacion.component';
import { PageCalificacionesComponent } from './pages/page-calificaciones/page-calificaciones.component';

import { TablaFavoritosComponent } from './core/componentes/tabla-favoritos/tabla-favoritos.component';





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
    ListaArriendosComponent,
    LoginComponent,
    SiginComponent,
    CrearCuentaComponent,
    BuscarArriendoComponent,
    BusquedaArriendoComponent,
    FormularioArriendoComponent,
    PageNuevoArriendoComponent,
    TablaAnunciosComponent,
    PageTusAnunciosComponent,
    PageNoLoginComponent,
    NoLogComponent,
    DetalleArriendoComponent,
    EditarArriendoComponent,
    PageEditarArriendoComponent,
    EditArriendoComponent,

    EditarUsuarioComponent,
    PageEditarUsuarioComponent,
    PageMostrarUsuariosComponent,
    TablaUsuariosComponent,    

    ReportesComponent,
    PageReportesComponent,
    MesComponent,
    TipoComponent,
    PageMesComponent,
    PageTipoComponent,
    PageFavoritosComponent,
    CalificacionComponent,
    PageCalificacionesComponent,
    TablaFavoritosComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,    
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
