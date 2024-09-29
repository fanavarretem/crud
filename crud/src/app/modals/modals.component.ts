import { Component, Input } from '@angular/core';
import { QueryService } from '../services/query.service';
import { Profesion } from '../data/profesion.model';
import { TipoId } from '../data/tipoId.model';
import { Persona } from '../data/persona.model';
declare var $:any;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent {

  @Input() personaSeleccionada:Persona;
  @Input() modificar:boolean;
  @Input() eliminar:boolean;
  txtTipoId:string="";
  txtNumId:number=0; 
  txtNombres:string="";
  txtApellidos:string="";
  txtDireccion:string="";
  txtTelefono:number=0;
  txtProfesion:string="";

  profesiones:Profesion[]=[];
  tiposId:TipoId[]=[];
  

  constructor(private queryservice:QueryService){
    this.getProfesiones();
  }

  getProfesiones(){
    return this.queryservice.getProfessions().subscribe(rtaProfesiones=>{
      this.profesiones=Object.values(rtaProfesiones);
    });
  }

  closeModal(modal:string){
    $(modal).modal('hide');
  }

  eliminar_registro(){
    this.closeModal('#mod_eliminar');
    this.queryservice.delete(this.personaSeleccionada.numero_id);
  }

  actualizar_registro(){
    this.closeModal('#mod_modificar');
    this.queryservice.update(this.personaSeleccionada.numero_id, this.personaSeleccionada);
  }

}
