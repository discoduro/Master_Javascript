"use strict"


// tranformacion de textos con metodos de javascript 

var numero = 789;
var texto1 = "hola spoy david diaz y estoy aprendiendo javascript";
var texto2 = "con el curos de vicor robles";

var resul =   numero.toString();      // metodo que conviente un numero en un string
var result = texto1.toLowerCase();   // metodo que conviente el texto en minuscula
var resulta = texto2.toUpperCase();   // metodo que conviente el texto en mayuscula

console.log(resul);
console.log(result);
console.log(resulta);



// calcular la longitud 


var nombre = "David Alejandro Diaz Quimbaya";        // el metodo LENGTH sirve para contra la logitud de una variavle
    nombre = ["numero1", "numero2"];                 // el metodo LENGTH sirve para contra la cantidad de objetos de un array

console.log(nombre.length)              // el metodo LENGTH sirve para contra la logitud y objetos de una variable



// como concatenar = unir textos 

var textoTotal = texto1+" "+texto2;             //con el operador + se conquetan y con las comillas dobles "" hago un espacion en el cual puedo introducir texto 
var textoCompleto = texto1.concat(" "+texto2);  //con la funcion .CONCAT() tambien se puede concatenar de la misma forma.
console.log(textoTotal);
console.log(textoCompleto);