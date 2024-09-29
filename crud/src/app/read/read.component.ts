import { Component } from '@angular/core';
import { Persona } from '../data/persona.model';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {

  personas:Persona[]=[];

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
     
  
}
