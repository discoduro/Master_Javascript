// hay que importar la clase.

import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component ({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'

})

// hooks o eventos ciclo de vida de un componente

// son comportamientos que se ejecutan en un momento determinado del ciclo de vida de un componente o directivanm de angular 

// hay que implementar la clase o directiva OnInit y crear el metodo OnInit
export class VideojuegoComponent  implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;

    constructor() {
        this.titulo = "Componente de videojuegos";
        this.listado = "Listado de los juegos más populares";
        console.log("Se ha cargado el componente: videojuego.component.ts");
    }

    // se ejecuta cada vez que se produce un cambio en el componente o en la aplicacion
    ngDoCheck(): void {
        console.log("DoCheck ejecutado");
    }

    // se ejecuta cuando se elimina un componente de la aplicacion
    ngOnDestroy(): void {   
        console.log("OnDestroy ejecutado");
    }

    // se ejecuta despues del constructor y se ejecuta una sola vez
    ngOnInit(): void {
        console.log("OnInit ejecutado");
    }
    


}   

