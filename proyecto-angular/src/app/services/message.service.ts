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
        return this._http.get(this.url+"messages", {headers: headers});
    }

    getMessages(id: any): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'message/'+id, {headers: headers});
    }


    deleteMessage(id: any):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.delete(this.url+'message/'+id, {headers: headers});
    }

    updateMessage(message: Message):Observable<any>{
        let params = JSON.stringify(message);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.put(this.url+'message/'+message._id, params, {headers: headers});
    }
    
}