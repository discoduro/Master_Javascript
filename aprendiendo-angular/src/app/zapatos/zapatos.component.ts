import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla'; // 1 importamos la clase Zapatos del archivo zapatos.ts y para usarla en el componente hay que importarla en el componente con el import
import { ZapatillaServices } from '../service/zapatilla.services';  



@Component({
  selector: 'app-zapatos',
  templateUrl: './zapatos.component.html',
  styleUrls: ['./zapatos.component.css'],
  providers: [ZapatillaServices]
})
export class ZapatosComponent implements OnInit {

  // 1 como crer una clase e importarla en el componente dentro de otra clase y usarla
  // 2 crear un modelo de datos: un modelo de datos es una clase que tiene propiedades y metodos que se pueden usar en cualquier componente y representra una entidad de la vida real
  // 3 crear un array de objetos de la clase Zapatos
  // 4 crear una propiedad de tipo string
  // 5 mostrar el array de objetos de la clase Zapatos en la vista del componente

  // 1 como crer una clase e importarla en el componente dentro de otra clase y usarla
  // 2 crear un modelo de datos: un modelo de datos es una clase que tiene propiedades y metodos que se pueden usar en cualquier componente y representra una entidad de la vida real
  
  public zapatos: Array<Zapatilla>=[]; // 3 creamos una propiedad de tipo array de la clase Zapatos
  public titulo: string = 'Componente de zapatos'; // 4 creamos una propiedad de tipo string
  public marcas: string[];
  public color: string;
  public mi_marca: string;

  // de esta forma se define una clase en typescript  con el constructor abreviado de la clase Zapatilla
  constructor(
    // de esta forma se inyecta un servicio en un componente
      private _ZapatillaServices: ZapatillaServices
    ){
    
    this.mi_marca = "";
    this.color = 'blue';
    this.marcas = new Array();
    this.titulo = 'Componente de zapatos';
    // this.zapatos = [
    //   new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, true),
    //   new Zapatilla('addidas', 'clasic', 'Blanco', 120, true),
    //   new Zapatilla('luis vouton', 'luis vouton', 'grins', 230, false),
    // ];
  }

  // modelia por esperanza.
  // avenida 24 # 64 a  37. 
  
  // angi castañeda. 

  // para llamar un servicio se pude realizar en el onInit de la siguiente forma
  ngOnInit(): void {

    // consumir un servicio en un componente
    this.zapatos = this._ZapatillaServices.getZapatos();
    // alert(this._ZapatillaServices.getTexto());
      this.getMarca();
  }

  getMarca(){
    this.zapatos.forEach((zapatos, index)=>{
        this.marcas.push(zapatos.marca);
        console.log(index);
    })
    console.log(this.marcas);

  }

  // # esta es una funcion de alerta de la variable mi_marca
  getMarca2(){
    alert(this.mi_marca)
  }

  // # funtion de boton para añadir texto al array marca
  addMarca2(){
    this.marcas.push(this.mi_marca);
  }


  // funcion click para borra un elemento de un array de forma reactiva
  borrarMarca(indice:any){

      // esta es la forma de borrar un elemento de un array tomando el indice
      delete this.marcas[indice];

      // de esta forma se borra un predeterminado numero de indices que se le pase como segundo parametro
      this.marcas.splice(indice, 1);
  }

  // evento blur es para mostrar cuando salga de algun elemento
  onBlur(){
    console.log("has salisdo del input");
  }

  mostrarPalabra(){
    // # esta es la forma de mostrar un mensaje de alerta en la cual cature la palabra por medio de la tecla enter
    alert(this.mi_marca);
  }
}
