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
}