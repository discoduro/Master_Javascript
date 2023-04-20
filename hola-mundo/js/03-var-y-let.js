"use strict"

//con los nuevos estandares de js se pueden declarar variables de dos formas ccon la palabra reservada "var" y "let".

//la diferencia principal entre "let" y "var" es el alcanse que tiene las variable y como actuan en funcion a los diferentes tipos de bloques. 

//define una variable global o local en una funcion sin importar el ambito del bloque.

//prueba con var
var numero = 40;
console.log(numero);

if(true){
    var numero = 50; //valor 50
    console.log(numero);
}
console.log(numero);
 


//let permite definir variables limitando su alcanse al bloque declaracion o exprecion donde se esta usando.

//prueba con let

let texto = "curso js"
console.log(texto)// valor "curso js"

if(true){
    let texto = "curso java";
    console.log(texto);
}
console.log(texto);