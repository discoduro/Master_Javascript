"use strict"


/*
calculadora:
1 pida dos numeros por pantalla 
2 si pedimos uno mal que nos lo vuelva a pedir
3 en el cuerpo de la pagina, en una alerta y por la consola el resultado de sumar, restar, multiplicar y dividir esas
dos cifras 
*/

var numero1 = parseInt(prompt("introduce el primer numero", 0));
var numero2 = parseInt(prompt("introduce el segundo numero", 0));


while(numero1 < 0 || numero2 < 0  || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("introduce el primer numero", 0));
    numero2 = parseInt(prompt("introduce el segundo numero", 0));
}

var resultado = "la suma es :"+(numero1 + numero2)+"</br>"+
                "la resta es :"+(numero1 - numero2)+"</br>"+
                "la multiplicacion es :"+(numero1 + numero2)+"</br>"+
                "la division es :"+(numero1 % numero2)+"</br>";


var resultadoCMD = "la suma es :"+(numero1 + numero2)+"\n"+
                "la resta es :"+(numero1 - numero2)+"\n"+
                "la multiplicacion es :"+(numero1 + numero2)+"\n"+
                "la division es :"+(numero1 % numero2)+"\n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);

