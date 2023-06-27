import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

    public nombre: [string] | undefined;
    public followers: [number] | undefined;

    // define los parametros que va a recibir por la url
    constructor( 
      private _route: ActivatedRoute,
      private _router: Router
      ){}

    // recojer parametros que se la pasan por a url al cual hay que utilizar el metodo subscribe() para que funcione
    ngOnInit(){
        this._route.params.subscribe((params: Params)=>{
        this.nombre = params['luna'];
        this.followers = params['followers'];

        // imprime el array
        console.log(params);

        // imprime el objeto
        console.log(this.nombre);

        // verificar que tipo de dato se esta recibiendo
        // tranformar ese dato que se esta inrpimiento a tipo number +
        console.log(typeof +(params['followers']));



        // manejar rutas condicionales, no sale bien, consultar forma de realizarlo
        if(this.nombre = params['nombre']){
           this._router.navigate(['/home'])
        }
      })
    }

    // metodo para redireccionar a otra pagina o componente
    redirigir(){
      this._router.navigate(['/zapatos'])
    }

}
