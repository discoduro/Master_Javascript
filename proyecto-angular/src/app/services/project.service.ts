import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Project } from "../models/project"; 
import { Global } from "./global";


@Injectable()

export class ProjectService{
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

    saveProject(proyect: Project): Observable<any>{
        let params = JSON.stringify(proyect);
        let headers = new HttpHeaders().set('Content-Type','application/json');


        return this._http.post(this.url+'save-proyect', params, {headers: headers});
    }

    getProjects(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+"proyects", {headers: headers});
    }

    getProject(id: any): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'proyect/'+id, {headers: headers});
    }


    deleteProject(id: any):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.delete(this.url+'proyect/'+id, {headers: headers});
    }

    updateProject(project: Project):Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.put(this.url+'proyect/'+project._id, params, {headers: headers});
    }
    
}