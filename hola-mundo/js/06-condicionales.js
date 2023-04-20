"use strict"


// condicionales If
// son instrucciones que permite ralizar una condicion
// si a es igual a b entonces haz esto!


//

var edad = 69;
var nombre = "david diaz";

/*
// operadores relacionales 
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/

// condicion if
/*
if (edad >= 18) {
    console.log( nombre+" tiene "+edad+" años y es mayor de edad ");
} else {
    console.log(nombre+" tiene "+edad+" años y es menor de edad ");
}
*/

/*
// anidar un if dentro de otro
if (edad >= 18) {
    console.log(nombre + " tiene " + edad + " años y es mayor de edad ");
    if (edad <= 34) {
        console.log("todavia eres milenial");
    } else {
        console.log("ya no eres  milenial")
    }
} else {
    console.log(nombre + " tiene " + edad + " años y es menor de edad ");
}
*/


// condiciones con else if dentro de en un if
if (edad >= 18) {
    console.log(nombre + " tiene " + edad + " años y es mayor de edad ");
    if (edad <= 33) {
        console.log("todavia eres milenial");
    } else if (edad >= 70) {
        console.log("eres anciano")
    } else {
        console.log("ya no eres milenial")
    }
} else {
    console.log(nombre + " tiene " + edad + " años y es menor de edad ");
}

/*
// operadores logicos
AND (Y): &&
OR (O): ||
Negacion: !
*/

var year = 2018;

//negacion
if(year != 2016){
    console.log("el año no es 2016, realmente es "+year);
}

//AND 
if(year >= 2000 && year <= 2021 && year != 2018){
    console.log("estamos en la era actual");
}else{
    console.log("estamos en la era post moderna");
};

//OR
if(year == 2008 || year >= 2018 && year == 2028){
    console.log("el año acaba en 8");
}else{
    console.log("el año no termina en 8")
}
