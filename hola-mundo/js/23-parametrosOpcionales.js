"use strict";

/*
las funciones son un grupo de ordenes agrupados en un orden concreto reutilizables,
que se ejecutan cuando son invocadas las funcioes
*/

// definir funcion y pasarle parametros, junto con un parametro opcional
function calculadora(numero1, numero2, mostrar = false) {
  //conjunto de funciones a ejecutar
  if (mostrar == false) {
    console.log("suma: " + (numero1 + numero2));
    console.log("resta: " + (numero1 - numero2));
    console.log("multiplicacion: " +(numero1 * numero2));
    console.log("division: " + (numero1 / numero2));
    console.log("******************************");
  } else {
    document.write("suma: " + (numero1 + numero2) + "<br>");
    document.write("resta: " + (numero1 - numero2) + "<br>");
    document.write("multiplicacion:" +(numero1 * numero2 ) + "<br>");
    document.write("division: " + (numero1 / numero2 )+ "<br>");
    document.write("******************************"+ "<br>");
  }
}

// invocar o llama a la funcion  por medio de parametros
calculadora(1, 8);
calculadora(7, 9, true);
