export class Persona{

    id_tipoident_fk:number=0;
    tipo_id:string="";
    numero_id:number=0;
    nombres:string="";
    apellidos:string="";
    direccion:string="";
    telefono:number=0;
    id_profesion_fk:number=0;
    profesion:string="";

    constructor(id_tipoident_fk:number, tipo_id:string, numeroId:number, nombre_usuario:string, apellidos:string, direccion:string, telefono:number, id_profesion_fk:number, profesion:string){
        
        this.id_tipoident_fk=id_tipoident_fk;
        this.tipo_id=tipo_id;
        this.numero_id=numeroId;
        this.nombres=nombre_usuario;
        this.apellidos=apellidos;
        this.direccion=direccion;
        this.telefono=telefono;
        this.id_profesion_fk=id_profesion_fk;
        this.profesion=profesion;
        
    }
}