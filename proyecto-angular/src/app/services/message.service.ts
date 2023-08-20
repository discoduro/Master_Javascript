import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Message } from "../models/message"; 
import { Global } from "./global";


@Injectable()

export class MessageService{
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

    saveMessage(message: Message): Observable<any>{
        let params = JSON.stringify(message);
        let headers = new HttpHeaders().set('Content-Type','application/json');


        return this._http.post(this.url+'save-message', params, {headers: headers});
    }

    getMessage(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+"message", {headers: headers});
    }

    // getProject(id: any): Observable<any>{
    //     let headers = new HttpHeaders().set('Content-Type','application/json');
    //     return this._http.get(this.url+'proyect/'+id, {headers: headers});
    // }


    deleteMessage(id: any):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.delete(this.url+'mensaje/'+id, {headers: headers});
    }

    // updateProject(project: Project):Observable<any>{
    //     let params = JSON.stringify(project);
    //     let headers = new HttpHeaders().set('Content-Type','application/json');

    //     return this._http.put(this.url+'proyect/'+project._id, params, {headers: headers});
    // }
    
}