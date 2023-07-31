import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Contact } from "../models/contact"; 
import { Global } from "./global";


@Injectable()

export class ContactService{
    public url : string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }



    testService(){
        return 'Provando consumo de servisio rest';
    }


    // # metodo para guardar un nuevo proyecto

    saveContact(contact: Contact): Observable<any>{
        let params = JSON.stringify(contact);
        let headers = new HttpHeaders().set('Content-Type','application/json');


        return this._http.post(this.url+'save-contact', params, {headers: headers});
    }

    getContacts(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+"notificaciones", {headers: headers});
    }

    // getProject(id: any): Observable<any>{
    //     let headers = new HttpHeaders().set('Content-Type','application/json');
    //     return this._http.get(this.url+'proyect/'+id, {headers: headers});
    // }


    // deleteProject(id: any):Observable<any>{
    //     let headers = new HttpHeaders().set('Content-Type','application/json');

    //     return this._http.delete(this.url+'proyect/'+id, {headers: headers});
    // }

    // updateProject(project: Project):Observable<any>{
    //     let params = JSON.stringify(project);
    //     let headers = new HttpHeaders().set('Content-Type','application/json');

    //     return this._http.put(this.url+'proyect/'+project._id, params, {headers: headers});
    // }
    
}