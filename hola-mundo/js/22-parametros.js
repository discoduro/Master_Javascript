"use strict"


/*
las funciones son un grupo de ordenes agrupados en un orden concreto reutilizables,
que se ejecutan cuando son invocadas las funcioes
*/

// definir funcion y pasarle parametros
function calculadora(numero1, numero2){                
    //conjunto de funciones a ejecutar 
    console.log("suma: "+(numero1 + numero2))    
    console.log("resta: "+(numero1 - numero2))    
    console.log("multiplicacion: "+(numero1 * numero2))    
    console.log("division: "+(numero1 / numero2))    
    console.log("******************************")    
    
    // return "y pronto dominare javascript";
}

// invocar o llama a la funcion  por medio de parametros
for(var i = 0; i <= 10; i++){
    console.log(i);
    calculadora(i,18);
}