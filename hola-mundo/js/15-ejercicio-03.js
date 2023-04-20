"use strict";


/*
hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("INTRODUCE EL PRIMER NUMERO"));
var numero2 = parseInt(prompt("INTRODUCE EL SEGUNDO NUMERO"));

document.write("<h1>DE "+numero1+" A "+numero2+" ESTAN LOS SIGUIENTES NUMEROS</h1>")
for(var i = numero1; i <= numero2; i++){
    document.write(i + "<br/>");
}