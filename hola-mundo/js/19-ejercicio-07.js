"use strict";

/*
programa que muestre la tabla de multiplicar por un numero introducido por prompt
*/

var numero = parseInt(prompt("de que numero quieres la tabla ", 1));

for (var i = 1; i <= 10; i++) {
    document.write(i + "x" + numero + "=" + i * numero + "</br>");
  }
 



/* tabla de todos los numero en un for */

for (var c = 1; c <= 15; c++) {
  document.write("<h1>tabla del</h1>" + c + "</br>");
  for (var i = 1; i <= 10; i++) {
    document.write(i + "x" + c + "=" + i * c + "</br>");
  }
}