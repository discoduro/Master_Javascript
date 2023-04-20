"use strict"


// tranformacion de textos con metodos de javascript 

var numero = 789;
var texto1 = "hola poy david diaz y estoy aprendiendo javascript";
var texto2 = "con el curos de vicor robles con";
var texto3 = "una motivacion de aprender bastante";
var texto4 = "y ser el mejor en sistemas y programacion para poder conformar mi empresa de sistemas";
var texto5 = "donde esta la coleccionar de porros que quiero quemar";
var texto6 = "busca un numero de texto";
var texto7 = "quien sabe como hacer un componente en doker";
var texto8 = "quien sabe como hacer un componente en doker ya que es la mejor ecnologia que hay hasta la fecha";
var texto9 = "quien sabe como hacer haking etico";

var busqueda = texto1.indexOf("javascript");    // el metodo (indexOf)  sirve para buscar la posicion en la que se encuentra una palabra 
console.log(busqueda);

var busqueda1 = texto2.lastIndexOf("con");    // el metodo (lastIndexOf) sirve para buscar la posicion de la que ultima cpoincidencia de  una palabra 
console.log(busqueda1);

var busqueda3 = texto3.search("motivacion");    // el metodo (search) sirve para buscar la posicion de una palabra 
console.log(busqueda3);

var busqueda4 = texto4.match(/sistemas/gi);    // el metodo (match) devuelve un array con las palabras  desde el indice 0 para que busque mas coincidencias se pone el string entre
console.log(busqueda4);                      //  barras (/ string/gi) para realizar una busqueda global.

var busqueda5 = texto5.substring(13, 25);    // el metodo (subString) sirve para buscar una palabra a partir de un primer caracter que le indique, hasta un segundo cararcter.
console.log(busqueda5);

var busqueda6 = texto6.charAt(23);    // el metodo (charAt) sirve para buscar una palabra a partir de un primer caracter que le indique.
console.log(busqueda6);

var busqueda7 = texto7.startsWith("quien");   // el metodo (startsWith)  buscar un string que empiese por la palabra que se busca y da como resultado da true, de lo contraio false
console.log(busqueda7);

var busqueda8 = texto8.endsWith("hay hasta la fecha");   // el metodo (endsWith) buscar un string que termine por la palabra que se busca y da como resultado da true, de lo
console.log(busqueda8);                                 // contraio da  false

var busqueda9 = texto9.includes("haking");   // el metodo (include)  buscar en un string una palabra, si la palabra existe da como resultado true, de lo contraio da false
console.log(busqueda9);