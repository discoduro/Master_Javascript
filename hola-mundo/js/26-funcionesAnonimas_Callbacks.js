"use strict";

// funciones anonimas

// es una funcion anonima que no tiene nombre, es decir el conjuto de instrucciones no va a tener un nombre y lo puedo
// guardar dentro de una variable

// la funcion callbacks es una funcion que se junta dentro de otra

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
  var sumar = numero1 + numero2;

  sumaYmuestra(sumar);
  sumaPorDos(sumar);

  return sumar;
}

sumame(  
  673,
  873,
  function (dato) {         // se esta invocanso la funcion anonima como callbacks
    console.log("la suma es:", dato);
  },
  function (dato) {         // se esta invocanso la funcion anonima como callbacks
    console.log("la suma por dos es:", dato * 2);
  }
);
