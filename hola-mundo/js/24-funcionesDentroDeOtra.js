"use strict"

/*
las funciones son un grupo de ordenes agrupados en un orden concreto reutilizables,
que se ejecutan cuando son invocadas las funcioes
*/

// definir funcion y pasarle parametros, junto con un parametro opcional

function porConsola(numero1, numero2){
    console.log("suma: " + (numero1 + numero2));
    console.log("resta: " + (numero1 - numero2));
    console.log("multiplicacion: " +(numero1 * numero2));
    console.log("division: " + (numero1 / numero2));
    console.log("******************************");
}

// definir funcion y pasarle parametros, junto con un parametro opcional

function porPantalla(numero1, numero2){
    document.write("suma: " + (numero1 + numero2) + "<br>");
    document.write("resta: " + (numero1 - numero2) + "<br>");
    document.write("multiplicacion:" +(numero1 * numero2 ) + "<br>");
    document.write("division: " + (numero1 / numero2 )+ "<br>");
    document.write("******************************"+ "<br>");
}

// logica de programacion manejando funciones, pasandole parametros

function calculadora(numero1, numero2, mostrar = false) {
  //conjunto de funciones a ejecutar
  if (mostrar == false) {
    porConsola(numero1, numero2);
  } else {
    porPantalla(numero1, numero2);
  }
  return "true";
}

// invocar o llama a la funcion  por medio de parametros
calculadora(1, 8);
calculadora(7, 9, true);
calculadora(18, 56, false);
calculadora(1, 35, true);
calculadora(28, 11, false);
calculadora(89, 35, true);
