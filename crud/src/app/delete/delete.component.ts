import { Component } from '@angular/core';
import { Persona } from '../data/persona.model';
import { QueryService } from '../services/query.service';
declare var $:any;
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent {
  modals=true;

  personas:Persona[]=[];
  personaSeleccionada:Persona;
  eliminar=false;
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
  eliminarRegistro(persona:Persona){
    this.eliminar=true;
    this.personaSeleccionada=persona;
    $('#mod_eliminar').modal('show');       
  }
}
