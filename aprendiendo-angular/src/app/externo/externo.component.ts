import { Component, ErrorHandler, OnInit } from '@angular/core';
import { PeticionesServices } from '../service/peticiones.services';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesServices]
})
export class ExternoComponent implements OnInit{

    public user : any;
    public userId : number;
    public fecha : any;
    public new_user : any; 
    public usuario_guardado : any;

  // para utilixar el objeto en el componente y el el oninit se debe crear el contuctor pasandole como parametro el servicio de peticionesServices
  constructor(
    private _peticionesServices: PeticionesServices
  ){
    this.userId = 1;  
    this.new_user = {
                "name": "",
                "job": ""
    }  
  }
  // hayq que usar la directiva ngOnInit
  ngOnInit(){
    this.fecha = new Date();
    this.cargaUsuario();
  }

  cargaUsuario(){
    // el metodo subscribe tiene dos petodos de callback
    this._peticionesServices.getUser(this.userId).subscribe({
      // se devuelve los datos a la variable result para poder usarlo en la vista
      next: (result) => ((this.user = result.data), console.log(result.data)),
      error: (e) => console.error(e),
      complete: () => console.info('completado'),
    }); 
  }


  // creo el metodo de envio y le paso como parametro el formulario
  onSubmit(form: any){
    this._peticionesServices.addUser(this.new_user).subscribe(
      response =>{
        this.usuario_guardado = response;
        form.reset();
      },
      error =>{
        console.log(<any>error);
      }
    )
  }
}
