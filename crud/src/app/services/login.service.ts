import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient,private router:Router) {

  }

  getLogin(nombre_usuario:string,clave_usuario:string){
    let parametros={"nombre_usuario":nombre_usuario,"clave_usuario":clave_usuario};
    this.httpClient.get('/api/public/login/',{params:parametros}).subscribe((data:any)=>{
      if (data=="existe"){
        return data;
        //this.router.navigate(['/']);
      }else if (data=="vacios"){
        $(".modal-header").html("<h4 class='modal-title'>CAMPOS VACÍOS</h4>");
        $("#texto").html("<p>USUARIO O CLAVE NO VALIDOS, VERIFIQUE E INTENTE DE NUEVO</p>");
        $('#mod_generic').modal('show');
      
      }else if (data=="inexistente"){
        $(".modal-header").html("<h4 class='modal-title'>REGISTRO NO EXISTE</h4>");
        $("#texto").html("<p>EL USUARIO NO SE ENCUENTRA REGISTRADO, POR FAVOR VERIFIQUE O GENERE REGISTRO EN EL SISTEMA</p>");
        $('#mod_generic').modal('show');

      }else{
        $(".modal-header").html("<h4 class='modal-title'>ERROR</h4>");
        $("#texto").html(data);
        $('#mod_generic').modal('show');
      }

    });
  }
}
