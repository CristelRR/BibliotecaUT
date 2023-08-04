import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { UsuarioAltaComponent } from './componentes/usuario-alta/usuario-alta.component';
import { UsuarioActualizarComponent } from './componentes/usuario-actualizar/usuario-actualizar.component';
import { UsuarioEliminarComponent } from './componentes/usuario-eliminar/usuario-eliminar.component';
import { LibroAltaComponent } from './componentes/libro-alta/libro-alta.component';
import { LibroActualizarComponent } from './componentes/libro-actualizar/libro-actualizar.component';
import { LibroEliminarComponent } from './componentes/libro-eliminar/libro-eliminar.component';
import { PrestamoLibroComponent } from './componentes/prestamo-libro/prestamo-libro.component';
import { DevolucionLibroComponent } from './componentes/devolucion-libro/devolucion-libro.component';
import { ConsultarLibroComponent } from './componentes/consultar-libro/consultar-libro.component';

const routes: Routes = [
  { path: 'inicio', component:InicioComponent },
  { path: '', component:InicioComponent },
  { path: 'principal', component:PrincipalComponent },
  { path: 'usuario-alta', component:UsuarioAltaComponent },
  { path: 'usuario-actualizar', component:UsuarioActualizarComponent },
  { path: 'usuario-eliminar', component:UsuarioEliminarComponent },
  { path: 'libro-alta', component:LibroAltaComponent },
  { path: 'libro-actualizar', component:LibroActualizarComponent },
  { path: 'libro-eliminar', component:LibroEliminarComponent },
  { path: 'prestamo', component:PrestamoLibroComponent },
  { path: 'devolucion', component:DevolucionLibroComponent },
  { path: 'consultar', component:ConsultarLibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
