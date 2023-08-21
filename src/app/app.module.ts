import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; //HACER USO DEL FORMULARIO

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InstitucionalComponent } from './componentes/institucional/institucional.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { LateralComponent } from './componentes/lateral/lateral.component';
import { UsuarioAltaComponent } from './componentes/usuario-alta/usuario-alta.component';
import { UsuarioActualizarComponent } from './componentes/usuario-actualizar/usuario-actualizar.component';
import { UsuarioEliminarComponent } from './componentes/usuario-eliminar/usuario-eliminar.component';
import { LibroAltaComponent } from './componentes/libro-alta/libro-alta.component';
import { LibroActualizarComponent } from './componentes/libro-actualizar/libro-actualizar.component';
import { LibroEliminarComponent } from './componentes/libro-eliminar/libro-eliminar.component';
import { PrestamoLibroComponent } from './componentes/prestamo-libro/prestamo-libro.component';
import { DevolucionLibroComponent } from './componentes/devolucion-libro/devolucion-libro.component';
import { ConsultarLibroComponent } from './componentes/consultar-libro/consultar-libro.component';
import { EditorialAltaComponent } from './componentes/editorial-alta/editorial-alta.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InstitucionalComponent,
    NavegacionComponent,
    PrincipalComponent,
    LateralComponent,
    UsuarioAltaComponent,
    UsuarioActualizarComponent,
    UsuarioEliminarComponent,
    LibroAltaComponent,
    LibroActualizarComponent,
    LibroEliminarComponent,
    PrestamoLibroComponent,
    DevolucionLibroComponent,
    ConsultarLibroComponent,
    EditorialAltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //HACER USO DE FORMULARIOS-SE AGREGA MANUALMENTE
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
