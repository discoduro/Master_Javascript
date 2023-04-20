// metodo constructor

// es un metodo especial que se ejecuta cuando se crea una instancia de la clase (objeto) y sirve para inicializar los atributos de la clase (objeto) o para ejecutar codigo cuando se crea el objeto (instancia de la clase)
// el metodo constructor se ejecuta automaticamente cuando se crea un objeto (instancia de la clase)

// sintaxis
// constructor(parametros) {
//   // codigo a ejecutar
// }

// para esxportar la clase se debe colocar la palabra export antes de la palabra class


interface CarroInterface {
  setCambiaColor(color: string): void;
  getCambiaColor(color: string): void;
  acelerar(): void;
  frenar(): void;
  encender(): void;
  apagar(): void;
  getEncendido(): boolean;
  setEncendido(encendido: boolean): void;

}

// descoradores para indicar que el metodo es un getter y un setter y para indicar que el metodo es un metodo estatico y para indicar que el metodo es un metodo privado y para indicar que el metodo es un metodo protegido y para indicar que el metodo es un metodo abstracto y para indicar que el metodo es un metodo de solo lectura y para indicar que el metodo es un metodo de sol

function estampar(logo: string) {
  return function (target: Function) { // target es la clase (objeto) a la que se le va a aplicar el decorador
    target.prototype.estampacion = function (): void { // void es para indicar que no retorna nada
      console.log("Camiseta estampada con el logo de: " + logo);
    }
  }
}

// un decorador lo que hace es añadir funcionalidades a una clase (objeto) sin modificar la clase (objeto) en si

// interfaces para definir los tipos de datos de los atributos de la clase (objeto) y los parametros del metodo constructor y los tipos de datos de los parametros de los metodos de la clase (objeto)
// @estampar("Gucci Gang")  // decorador para indicar que el metodo es un decorador
class Carro implements CarroInterface {
  // implementar la interface para que la clase (objeto) tenga los atributos y metodos de la interface 
  // atributos
  private marca: string;
  private modelo: string;
  private color: string;
  private velocidad: number;
  private _encendido: boolean;

  // metodo constructor
  constructor({ marca, modelo, color, velocidad, encendido }: { marca: string; modelo: string; color: string; velocidad: number; encendido: boolean }) {
    // inicializar los atributos de la clase
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.velocidad = velocidad;
    this._encendido = encendido;
  }

  // metodos
  public setCambiaColor(color: string): void {
    // set es para indicar que no retorna nada
    this.color = color;
  }
  public getCambiaColor(color: string): void {
    // get es para indicar que retorna algo
    this.color = color;
  }

  public acelerar(): void {
    this.velocidad += 10;
  }

  public frenar(): void {
    this.velocidad -= 10;
  }

  public encender(): void {
    this._encendido = true;
  }

  public apagar(): void {
    this._encendido = false;
  }

  public getEncendido(): boolean {
    return this._encendido;
  }

  public setEncendido(encendido: boolean): void {
    this._encendido = encendido;
  }


}

// heredar los atributos y metodos de la clase padre (super clase) Carro a la clase hija (sub clase) sudadera
class sudadera extends Carro {

  // atributos
  private capucha: boolean; // atributo propio de la clase (objeto) sudadera

  // metodo constructor
  constructor({ marca, modelo, color, velocidad, encendido, capucha }: { marca: string; modelo: string; color: string; velocidad: number; encendido: boolean; capucha: boolean }) {
    super({ marca, modelo, color, velocidad, encendido }); // se debe colocar los parametros del metodo constructor en el orden en que se encuentran en el metodo constructor de la clase padre (super clase) (objeto)
    this.capucha = capucha;
  }

  // metodos
  public setCambiaCapucha(capucha: boolean): void {
    // set es para indicar que no retorna nada
    this.capucha = capucha;
  }
  public getCambiaCapucha(capucha: boolean): void {
    // get es para indicar que retorna algo
    this.capucha = capucha;
  }


}

// instanciar la clase
let carro1 = new Carro({ marca: "Mazda", modelo: "3", color: "Rojo", velocidad: 0, encendido: false }); // se debe colocar los parametros del metodo constructor en el orden en que se encuentran en el metodo constructor de la clase (objeto)
carro1.getCambiaColor("Azul");
carro1.acelerar();

// se esta aplicando el decorador estampar a la clase (objeto) Carro
// carro1.estampar(); // metodo estampacion que se agrego con el decorador estampar
let carro2 = new Carro({ marca: "Mazda", modelo: "6", color: "Azul", velocidad: 0, encendido: false });
let carro3 = new Carro({ marca: "Mazda", modelo: "CX-5", color: "Blanco", velocidad: 0, encendido: false });

var nike = new sudadera({ marca: "Nike", modelo: "3", color: "Rojo", velocidad: 0, encendido: false, capucha: true });
nike.getCambiaColor("gris claro");


console.log(carro1, carro2, carro3, nike,); 


// decoradores no funcionaron al igual que importar y exportac clases y metodos y atributos de una clase (objeto) a otra clase (objeto) y a un archivo .ts