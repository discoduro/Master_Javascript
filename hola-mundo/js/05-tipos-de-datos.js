"use strict"

//operadores 

var numero1 = 7;
var numero2 = 28;
var operacion = numero1 * numero2;
//alert("el resultado de la operacion es: " + operacion)


//tipos de datos

//entero
//estrin o cadena de texto
//coma flotante o decimal 
//boleano = true o false
//arrais 
//objetos

var numero_entero = 44;
var cadena_texto = "hola curso de javascript";
var verdadero_o_falso = false;
var numero_decimal = 38.9;

//funcion number =  me permite convertir un numero en (flotante, decimal, string)

var numero_false = "40";

console.log(Number(numero_false) + 7);

//funcion parseInt = me permite convertir un string a numero entero

var numero_true = "33"
console.log(parseInt(numero_true) + 7);

//funcion parseFloat = me permite convertir un numero a numero decimal.

var numero_decimal = "23.8"
console.log(parseFloat(numero_decimal) + 9);

//funcion string = me permite convertir un numero entero a cadena de texto.

var numero_string = 60;
console.log(String(numero_string) + 3);


//para saber el tipo de dato de una variable uso el operador (typeof).

console.log(typeof(numero_entero));
console.log(typeof(cadena_texto));
console.log(typeof(verdadero_o_falso));
console.log(typeof(numero_decimal));