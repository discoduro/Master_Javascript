"use strict"


//parametrso REST Y SPREAD

// el parametro  REST sirve para pasar parametros indefinidos

function listadoFrutas(fruta1, fruta2, ...REST){
    console.log("fruta1 :", fruta1);
    console.log("fruta2 :", fruta2);
    console.log(...REST);
}

listadoFrutas("naranja", "banano", "manzana", "pera", "uvas", "mango");

// crear un array para usar el spread

// el parametro SPREAD sirve para pasar un listado de elementos dentro de un array como parametro de tipo SPREAD 

var frutas = ["naraja", "banano"];
listadoFrutas(...frutas, "manzana", "pera", "uvas");
