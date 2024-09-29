import { Component } from '@angular/core';
import { QueryService } from '../services/query.service';
import { Persona } from '../data/persona.model';
declare var $:any;

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  
  personas:Persona[]=[];
  persona:Persona;
  personaSeleccionada:Persona;
  modificar=false;

  constructor(private queryservice:QueryService){
    this.getRegistros();
  }

  getRegistros(){
    return this.queryservice.read().subscribe(registros=>{
      if(typeof registros=="object"){
        this.personas=Object.values(registros);
      }
    });
  }

  actualizarRegistro(persona:Persona){
    this.personaSeleccionada=persona;
    this.modificar=true;
    $('#mod_modificar').modal('show');
  }

}
