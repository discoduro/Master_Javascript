"use strict";

/*
1. pida 6 dijitos por pantalla y los introdusca en un array 
2. mostrar el array entero (todos sus elementos ) en el cuerpo de la pagina y de la consola 
3. ordenar y mostrar 
4. invertir su orden y mostrarlo 
5. mostrar cuantos elementos tiene el array 
6. busqueda de un valor introducido por el usuario, que nos diga si lo encuentar y su indice
*/

function mostrarArray(elementos, textoCustom = "") {
  document.write("<h1>CONTENIDO DEL ARRAY"+textoCustom+"</h1>");
  document.write("<ul>");
  elementos.forEach((elementos, index) => {
    document.write("<li>" + elementos + "</li>");
  });
  document.write("</ul>");
}
// pedir 6 numeros
var numeros = [];

for (var i = 0; i <= 6; i++) {
  numeros[i] = parseInt(prompt("introduce un numero", 0));
}

// mostrar en el cuerpo de la pagina

mostrarArray(numeros, ' EN PANTALLA');

// mostrar en consola

console.log(numeros);

// ordenar y  mostrar

numeros.sort();
mostrarArray(numeros, ' ORDENADO');

// invertir su orden y mostrarlo

numeros.reverse();
mostrarArray(numeros, ' INVERTIRDO');

// mostrar cuantos elementos tiene un array

document.write("<h2>EL ARRAY TIENE : "+numeros.length+" ELEMENTOS</h2>")

// busqueda de un numero digitado por el usuario, muestre si lo encuentra y su indice


var buscar = parseInt(prompt("BUSCAR UN NUMERO", 0));

var buscado = numeros.findIndex(numero => numero == buscar);

if(buscado && buscado != -1){
  document.write("<h2>ENCONTRADO</h2>")
  document.write("<h3>LA POSICION DE LA BUSQUEDA ES :"+buscado+"</h3>")
}else{
  document.write("<h1>NO ENCONTRADO</h1>")
}
