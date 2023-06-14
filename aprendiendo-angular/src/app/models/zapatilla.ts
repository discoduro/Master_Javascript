export class Zapatilla{

    // de esta forma se define una clase en typescript 

    /*
    public nombre: string;
    public marca: string;
    public color: string;
    public precio: number;
    public stock: boolean;

    constructor(nombre, marca, color, precio, stock){
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }*/


    // de esta forma se define una clase en typescript  con el constructor abreviado 

    constructor(
        public nombre: string,
        public marca: string,
        public color: string,
        public precio: number,
        public stock: boolean
    ){}
}