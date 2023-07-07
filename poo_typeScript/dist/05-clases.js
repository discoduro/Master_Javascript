// programacion orientada a objetos en  javascript con los nuevos estandares de programacion con TypeScript
// una calse es un molde para crear objetos de un mismo tipo, con caracteristicas parecidas pero que pueden variar entre si mismos y que pueden tener metodos o funciones que nos permitan realizar acciones con los objetos que se creen a partir de esta clase o molde de objeto que es la clase en si misma y que se puede crear un numero ilimitado de objetos a partir de esta clase o molde de objeto
// la clase se debe llamar igual que el archivo que la contiene y usar escritura camelCase o sea la primera letra de la clase en mayuscula y las siguientes en minuscula
// clase
var Clases = /** @class */ (function () {
    function Clases() {
    }
    // metodo o funcion
    Clases.prototype.setCambiarNombre = function (nombre) {
        this.nombre = nombre;
    };
    Clases.prototype.getCambiarNombre = function () {
        return this.nombre;
    };
    return Clases;
}());
// instanciar la clase o crear un objeto a partir de la clase
var camisa = new Clases();
camisa.setCambiarNombre("Spiderman");
camisa.getCambiarNombre();
var camisa2 = new Clases();
camisa2.setCambiarNombre("bantman");
camisa2.getCambiarNombre();
// si quisiera sacar un dato especifico de un objeto debo hacerlo de la siguiente manera
console.log(camisa2.getCambiarNombre());
// si quisiera sacar todos los datos de un objeto debo hacerlo de la siguiente manera
console.log(camisa);
