"use strict";

// tranformacion de textos con metodos de javascript 


var texto1 = "hola soy david diaz y estoy aprendiendo javascript";
var texto2 = "con el curos de victor robles con";
var texto3 = "   una motivacion de aprender bastante   ";


var remplasar = texto1.replace("javascript","c++"); // la funcion (replace) sirve para reemplasar una palabra de un string por otro parametro o palabra
console.log(remplasar);

var remplasar = texto2.slice(16); // la funcion (slice) sirve paraseparar texto a partir del caracter que le indique y lo muestra.
console.log(remplasar);


var remplasar = texto2.split(" "); // la funcion (split) sirve paraseparar palabras que hay en el string con el espacio que le indico, retornando cada palabra como   un array.
console.log(remplasar);

var remplasar = texto3.trim(); // la funcion (trim) sirve quitar los espacion que hay al cominzo y al final del string.
console.log(remplasar);
