import { Injectable } from "@angular/core"; 
import { HttpClient, HttpHeaders } from "@angular/common/http";
// es una libvreria que se ha intalado con el proyecto
import { Observable } from "rxjs";


// para consumir un servicio por petion ajac http se debe relizar el inyectable
@Injectable()
// exporta la clase
export class PeticionesServices{
    // crea la propiedad o variable url de tipo streang
    public url: string;

    // crea el contructor y le pasa como parametro la intecion 
    constructor(
        // inyectra servicio http
        public _http: HttpClient
    ){
        // seleccional la url de la cual se van a consultar los datos
        this.url = "https://reqres.in/";

    }

    // se crea el metodo de consulta de datos segun este en la api rest
    // se le indica que devuelve un observable y tiene un metodo subscribe
    getUser(userId: number): Observable<any>{
        return this._http.get(this.url+'api/users/'+userId);
    }


    // como guardar un nuevo usuario en un back ent por peticion post

    // hay que añadir un metodo user y que devuelva un observable de tipo any
    // le pasamos un objeto para guardar
    // hayq ue enviar los datos en un json string

    // para convertit un objeto de javascript puro a un json string hay que usar el objeto json.stringify(user) y le pasamos el usuario

    // de esta forma se hace una peticion ajax por metodo post 
    addUser(user: any): Observable<any>{
        let params = JSON.stringify(user);
        // indicar cabeceras con htpheaders() usando el metodo set()
        let headers = new HttpHeaders().set('content-type','application/json')

        // le indico que retorne la peticion http 

        return this._http.post(this.url+'api/users', params, {headers: headers});
    }


}