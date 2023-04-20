
// crear un objeto con JSON (JavaScript Object Notation)    
// JSON es un formato de texto ligero para el intercambio de datos 
// JSON es un subconjunto de la notación literal de objetos de JavaScript   
// JSON es independiente del lenguaje, ya que se basa en un subconjunto de la sintaxis de JavaScript.
// JSON es un formato de texto, similar a XML. JSON es más ligero que XML.


var bicicleta = {
    color: "Rojo",
    modelo: "BMX",
    frenos: "De disco",
    velocidadMaxima: "60km",

    // metodo   
    cambiaColor: function(nuevo_color){
        // bicicleta.color = nuevo_color;
        this.color = nuevo_color;
        console.log(this);
    }
}

console.log(bicicleta);

//  acceder a los atributos del objeto  para mostrarlos en consola de acuerdo al metodo JSON 
bicicleta.cambiaColor("Azul");