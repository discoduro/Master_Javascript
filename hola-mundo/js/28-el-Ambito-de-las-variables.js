"use strict";

var texto = "hola mundo";
var numero = 17;

// una variable que se crea dentro de una funcion no se puede llamar por fuera de si misma porque 
// esta de forma local en la funcion. 
// se tiene acceso desde adentro de la funcion
// el metodo typeof comprueba el tipo de dato de una variable.


function holaMundo() {
  var js = "hola javascrpt";
  console.log( texto);
  console.log( numero.toString());      // para convertir un numero a un string se usa el metodo .TOSTRING()
  console.log( js);
}

holaMundo(texto);
