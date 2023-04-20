"use strict";

// uso de arrays avanzados

var nombre = "esta es una parctica con arrays";
var lenguajes = new Array("java", "php", "javascrip", "c#");

var elemento = parseInt(prompt("elige el array que deseas consultar?", 0));

if (elemento >= lenguajes.length) {
  alert("introduce un numero menor a :" + lenguajes.length);
} else {
  alert("el lenguaje seleccionado es: " + lenguajes[elemento]);
}

alert(lenguajes[elemento]);

console.log(lenguajes.length)   // la funcion (length) sirve para contar cuantos objetos hay dentro de un array

document.write("<h1>Lenguajes de programacion del año 2023</h1>");


lenguajes.forEach((len, index, arr) => {
  if (index == 0) document.write("<ul>");                        // de esta forma se programa utilizando el metodo forEach
  document.write(`<li>${len}</li> `);
  if (index == arr.length - 1) document.write("</ul>");
}); 


document.write("<ul>");
for(var i = 0; i < lenguajes.length; i++){                       //de esta forma se programa sin usar programacion funcional, y esta echo con un for
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");

for(var i = 0; i < lenguajes.length; i++){                       //de esta forma se hace con el for, no esta dentro de un formculario !
    document.write("<li>"+lenguajes[i]+"</li>");
}