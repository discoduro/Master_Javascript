"use strict";

/*
Mostrar todos los numeros inpares que hay entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt("INTRODUCE EL PRIMER NUMERO", 0));
var numero2 = parseInt(prompt("INTRODUCE EL SEGUNDO NUMERO", 0));

while(numero1 < numero2){
    numero1++;
    if(numero1%2 != 0 ){
        console.log("el "+numero1+" es impar");
    }
}

