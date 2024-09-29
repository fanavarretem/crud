import { Component } from '@angular/core';
import { Persona } from '../data/persona.model';
import { QueryService } from '../services/query.service';
import { Profesion } from '../data/profesion.model';
import { TipoId } from '../data/tipoId.model';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  txtTipoId:number=0;
  txtNumId:number=0;
  txtNombres:string="";
  txtApellidos:string="";
  txtDireccion:string="";
  txtTelefono:number=0;
  txtProfesion:number=0;

  profesiones:Profesion[]=[];
  tiposId:TipoId[]=[];


  constructor(private queryservice:QueryService, private router:Router){
    this.getProfesiones();
    this.getTipoId();
    //CONSULTAR COOKIE Y SI NO ENRUTAR A PRINCIPAL O A LOGIN
    //this.router.navigate(['/']);
  }

  crearRegistro(){
    let persona = new Persona(this.txtTipoId,"",this.txtNumId,this.txtNombres,this.txtApellidos,this.txtDireccion,this.txtTelefono,this.txtProfesion,"");
    this.queryservice.create(persona);
    

  }

  getProfesiones(){
    return this.queryservice.getProfessions().subscribe(rtaProfesiones=>{
      this.profesiones=Object.values(rtaProfesiones);
    });
  }
  
  getTipoId(){
    return this.queryservice.getIdTypes().subscribe(rtaTiposId=>{
      this.tiposId=Object.values(rtaTiposId);
    });
    
  }

}
