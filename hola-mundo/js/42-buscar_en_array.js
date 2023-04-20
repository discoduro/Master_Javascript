"use strict"

// para hacer busquedas en un array se usa el metodo (find) que lleva una funcion y dento como parametro un callbak
// para hacer busquedas una busqueda del indice del array se usa la funcion (findIndex) retorna el indice en el que se encuenre el dato


var valor = "10, 40, 50, 12";
var lenguaje_Programacion = ["php", "java", "phyton", "javascript"];

var buesqueda = lenguaje_Programacion.find(lenguaje_Programacion => lenguaje_Programacion == "php"); // se esta comparando la variable con el estirg que desea buscar  si no esta retornara invalido o indefinido



var buscar = lenguaje_Programacion.findIndex(function(lenguaje_Programacion){  // saca el indice del datos que estoy buscando dentro del array 
    return lenguaje_Programacion == "java";
})




// ----------------------------------------------------------------------





var valorTotal = valor.some(valor => valor >= 30);  // el metodo para encontrar valores DE UN TIPO U OTRO => no funciona 

console.log(valorTotal);