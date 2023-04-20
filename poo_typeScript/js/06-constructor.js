// metodo constructor
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// descoradores para indicar que el metodo es un getter y un setter y para indicar que el metodo es un metodo estatico y para indicar que el metodo es un metodo privado y para indicar que el metodo es un metodo protegido y para indicar que el metodo es un metodo abstracto y para indicar que el metodo es un metodo de solo lectura y para indicar que el metodo es un metodo de sol
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
// un decorador lo que hace es añadir funcionalidades a una clase (objeto) sin modificar la clase (objeto) en si
// interfaces para definir los tipos de datos de los atributos de la clase (objeto) y los parametros del metodo constructor y los tipos de datos de los parametros de los metodos de la clase (objeto)
// @estampar("Gucci Gang")  // decorador para indicar que el metodo es un decorador
var Carro = /** @class */ (function () {
    // metodo constructor
    function Carro(_a) {
        var marca = _a.marca, modelo = _a.modelo, color = _a.color, velocidad = _a.velocidad, encendido = _a.encendido;
        // inicializar los atributos de la clase
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidad = velocidad;
        this._encendido = encendido;
    }
    // metodos
    Carro.prototype.setCambiaColor = function (color) {
        // set es para indicar que no retorna nada
        this.color = color;
    };
    Carro.prototype.getCambiaColor = function (color) {
        // get es para indicar que retorna algo
        this.color = color;
    };
    Carro.prototype.acelerar = function () {
        this.velocidad += 10;
    };
    Carro.prototype.frenar = function () {
        this.velocidad -= 10;
    };
    Carro.prototype.encender = function () {
        this._encendido = true;
    };
    Carro.prototype.apagar = function () {
        this._encendido = false;
    };
    Carro.prototype.getEncendido = function () {
        return this._encendido;
    };
    Carro.prototype.setEncendido = function (encendido) {
        this._encendido = encendido;
    };
    return Carro;
}());
// heredar los atributos y metodos de la clase padre (super clase) Carro a la clase hija (sub clase) sudadera
var sudadera = /** @class */ (function (_super) {
    __extends(sudadera, _super);
    // metodo constructor
    function sudadera(_a) {
        var marca = _a.marca, modelo = _a.modelo, color = _a.color, velocidad = _a.velocidad, encendido = _a.encendido, capucha = _a.capucha;
        var _this = _super.call(this, { marca: marca, modelo: modelo, color: color, velocidad: velocidad, encendido: encendido }) || this;
        _this.capucha = capucha;
        return _this;
    }
    // metodos
    sudadera.prototype.setCambiaCapucha = function (capucha) {
        // set es para indicar que no retorna nada
        this.capucha = capucha;
    };
    sudadera.prototype.getCambiaCapucha = function (capucha) {
        // get es para indicar que retorna algo
        this.capucha = capucha;
    };
    return sudadera;
}(Carro));
// instanciar la clase
var carro1 = new Carro({ marca: "Mazda", modelo: "3", color: "Rojo", velocidad: 0, encendido: false }); // se debe colocar los parametros del metodo constructor en el orden en que se encuentran en el metodo constructor de la clase (objeto)
carro1.getCambiaColor("Azul");
carro1.acelerar();
// se esta aplicando el decorador estampar a la clase (objeto) Carro
// carro1.estampar(); // metodo estampacion que se agrego con el decorador estampar
var carro2 = new Carro({ marca: "Mazda", modelo: "6", color: "Azul", velocidad: 0, encendido: false });
var carro3 = new Carro({ marca: "Mazda", modelo: "CX-5", color: "Blanco", velocidad: 0, encendido: false });
var nike = new sudadera({ marca: "Nike", modelo: "3", color: "Rojo", velocidad: 0, encendido: false, capucha: true });
nike.getCambiaColor("gris claro");
console.log(carro1, carro2, carro3, nike);
// decoradores no funcionaron al igual que importar y exportac clases y metodos y atributos de una clase (objeto) a otra clase (objeto) y a un archivo .ts
