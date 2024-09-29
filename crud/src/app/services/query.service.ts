import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../data/persona.model';
declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private httpClient:HttpClient) { }

  create(persona:Persona){
    this.httpClient.post('/api/public/usuarios/insertar',persona).subscribe((data:any)=>{
      if (data=="insertado"){
				$(".modal-header").html("<h4 class='modal-title'>OPERACION EXITOSA</h4>");
				$("#texto").html("<p>DATOS ALMACENADOS EXITOSAMENTE</p>");
				$("#btnAceptar").attr("onclick","location.reload();");
				$('#mod_generic').modal('show');				

			}else if (data=="vacios"){
				$(".modal-header").html("<h4 class='modal-title'>CAMPOS VACÍOS</h4>");
				$("#texto").html("<p>VERIFIQUE LOS DATOS DE CAMPOS OBLIGATORIOS E INTENTE DE NUEVO</p>");
				$('#mod_generic').modal('show');
			
			}else if (data=="existe"){
				$(".modal-header").html("<h4 class='modal-title'>REGISTRO DUPLICADO</h4>");
				$("#texto").html("<p>EL ID DE REGISTRO YA EXISTE EN LA BASE DE DATOS, POR FAVOR VERIFIQUE</p>");
				$('#mod_generic').modal('show');

			}else{
				$(".modal-header").html("<h4 class='modal-title'>ERROR</h4>");
				$("#texto").html(data);
				$('#mod_generic').modal('show');
			}
    });
    
  }

  read(){
    return this.httpClient.get('/api/public/usuarios/');
  }

  update(id:number,persona:Persona){
    this.httpClient.put('/api/public/usuarios/modificar/'+id,persona).subscribe((data:any)=>{
      if (data=="actualizado"){
				$(".modal-header").html("<h4 class='modal-title'>OPERACION EXITOSA</h4>");
				$("#texto").html("<p>DATOS ACTUALIZADOS EXITOSAMENTE</p>");
				$("#btnAceptar").attr("onclick","location.reload();");
				$('#mod_generic').modal('show');				

			}else if (data=="vacios"){
				$(".modal-header").html("<h4 class='modal-title'>CAMPOS VACÍOS</h4>");
				$("#texto").html("<p>VERIFIQUE LOS DATOS DE CAMPOS OBLIGATORIOS E INTENTE DE NUEVO</p>");
				$('#mod_generic').modal('show');
			
			}else if (data=="inexistente"){
				$(".modal-header").html("<h4 class='modal-title'>REGISTRO NO EXISTE</h4>");
				$("#texto").html("<p>NO SE ENCUENTRA EL REGISTRO EN LA BASE DE DATOS, POR FAVOR VERIFIQUE</p>");
				$('#mod_generic').modal('show');

			}else{
				$(".modal-header").html("<h4 class='modal-title'>ERROR</h4>");
				$("#texto").html(data);
				$('#mod_generic').modal('show');
			}
    });
  }

  delete(id:number){
    this.httpClient.delete('/api/public/usuarios/eliminar/'+id).subscribe((data:any)=>{
      if (data=="eliminado"){
			$(".modal-header").html("<h4 class='modal-title'>OPERACION EXITOSA</h4>");
			$("#texto").html("<p>DATOS ELIMINADOS EXITOSAMENTE</p>");
			$("#btnAceptar").attr("onclick","location.reload();");
			$('#mod_eliminar').modal('toggle');
			$('#mod_generic').modal('show');				

		}else if (data=="vacios"){
			$(".modal-header").html("<h4 class='modal-title'>CAMPOS VACÍOS</h4>");
			$("#texto").html("<p>VERIFIQUE LOS DATOS DE CAMPOS OBLIGATORIOS E INTENTE DE NUEVO</p>");
			$('#mod_generic').modal('show');
		
		}else if (data=="inexistente"){
			$(".modal-header").html("<h4 class='modal-title'>REGISTRO NO EXISTE</h4>");
			$("#texto").html("<p>NO SE ENCUENTRA EL REGISTRO EN LA BASE DE DATOS, POR FAVOR VERIFIQUE</p>");
			$('#mod_generic').modal('show');

		}else{
			$(".modal-header").html("<h4 class='modal-title'>ERROR</h4>");
			$("#texto").html(data);
			$('#mod_generic').modal('show');
		}

    });
  }

  getProfessions(){
    return this.httpClient.get('/api/public/operaciones/profesion');
  }

  getIdTypes(){
    return this.httpClient.get('/api/public/operaciones/tipoid');
  }

}
