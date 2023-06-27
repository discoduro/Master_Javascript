import { Component, ErrorHandler, OnInit } from '@angular/core';
import { PeticionesServices } from '../service/peticiones.services';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesServices]
})
export class ExternoComponent implements OnInit{

    public user : any;
    public userId : number;

  // para utilixar el objeto en el componente y el el oninit se debe crear el contuctor pasandole como parametro el servicio de peticionesServices
  constructor(
    private _peticionesServices: PeticionesServices
  ){
    this.userId = 1;    
  }
  // hayq que usar la directiva ngOnInit
  ngOnInit(){
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
}
