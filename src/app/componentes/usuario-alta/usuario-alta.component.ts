import { Component } from '@angular/core';
import { Usuario } from 'src/models/usuario';
import { UsuarioAltaService } from 'src/app/services/usuario-alta.service';
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-usuario-alta',
  templateUrl: './usuario-alta.component.html',
  styleUrls: ['./usuario-alta.component.css']
})
export class UsuarioAltaComponent implements OnInit {
  constructor(public usuarioService:UsuarioAltaService) { }

  ngOnInit(): void { //ngOnInit -> signica que cuando se cargue el componente muestre todo lo que tiene dentro.
    //console.log(this.empleadoService.getEmpleados());
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(
      res => {
        this.usuarioService.usuarios= res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  createUsuario(form:NgForm){  //Sirve para agregar e insertar
    alert('Insertando Registro');
     this.usuarioService.createUsuario(form.value).subscribe(
      res=> {
        this.getUsuarios();
        form.reset();
      },
      err=> console.log(err)
    )
  }     

  updateUsuario(form:NgForm){
    alert('actualizando'); 
       this.usuarioService.editUsuario(form.value).subscribe( //recibe como parametro los datos del formulario
        res=> console.log(res),
        err=> console.log(err)
       );
  }

  deleteEmpleado(id:any){
    //alert('Borrando');
     const resp= confirm('Estas seguro de eliminarlo?');
     console.log('eliminando '+id);
     if(resp){
       this.usuarioService.deleteUsuario(id).subscribe( //elimina el registro
        (res)=>{
          this.getUsuarios();
        },
        (err)=> console.log(err)
       );
     }
  }

  editUsuario(usuario:Usuario){ //recibe un objeto de la clase empleado
    this.usuarioService.usuario= usuario;
  }

  formReset(form:NgForm){
    this.usuarioService.usuario=form.value;
    form.reset();
  }
}
