"use strict"

/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
plus: si los caracteres no son numeros o son menores o iguales a cero, nos lo vuelve a pedir
*/

var numero1 = (parseInt(prompt("DIGITE EL PRIMER NUMERO")));
var numero2 = (parseInt(prompt("DIGITE EL SEGUNDO NUMERO")));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = (parseInt(prompt("EL DATO QUE INGRESO NO ES VALIDO, INGRESE EL PRIMER NUMERO NAURAL")));
    numero2 = (parseInt(prompt("EL DATO QUE INGRESO NO ES VALIDO, INGRESE EL SEGUNDO NUMERO NAURAL")));
}
if (numero1 == numero2) {
    console.log("Los dos numero son iguales:" + numero1, numero2);
}
else if (numero1 > numero2) {
    console.log("El numero mayor es:" + numero1);
    console.log("El numero menor es:" + numero2);
}
else if (numero2 > numero1) {
    console.log("El numero mayor es:" + numero2);
    console.log("El numero menor es:" + numero1);
}
else {
    alert("INTRODUCE NUMERO VALIDOS");
}




