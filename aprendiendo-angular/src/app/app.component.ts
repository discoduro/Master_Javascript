import { Component } from '@angular/core'; // importamos el decorador @Component de angular/core 
import { configuracion } from './models/configuracion'; // importamos la libreria rxjs

//  en el decorador @Component se define el selector, el template y el estilo de la vista del componente 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// exportamos la clase AppComponent para que pueda ser usada en otros archivos 
export class AppComponent {
  public title = 'aprendiendo-angular con Victor Robles';
  public mostrar_videojuegos: boolean = true;
  public descripcion: string = configuracion.descripcion;
  public configuracion;


  constructor() { 
    this.configuracion = configuracion;
    this.title = configuracion.titulo; 
    this.descripcion = configuracion.descripcion; 
    
  }

  // metodo para ocultar los videojuegos
  ocultarVideojuegos() {
    this.mostrar_videojuegos = false;
  } 

  //  metodo para mostrar los videojuegos
  mostrarVideojuegos() {
    this.mostrar_videojuegos = true;
  } 

}
