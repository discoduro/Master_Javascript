alert("Esta a punto de ver una pequeña introduccion a TypeScript y sus tipos de datos ");
// Tipos de datos en TypeScript (JavaScript)
// String
var cadena = "David Diaz";
// Number
var numero = 12;
// Boolean
var verdadero_falso = true;
// Any (Cualquier tipo de dato)
var cualquiera = "Hola";
// Arrays
var lenguajes = ["PHP", "JS", "CSS"];
// Arrays indica el tipo de dato y el numero de elementos que tendra el array
var years = [12, 13, 14];
// Array conjunto de datos de diferentes tipos
var pais = ["España", 12, true, "Colombia"];
// Constantes
var PI = 3.1416;
// multiples tipos de datos asignados a una variable
var multiple_dato = "David Diaz";
multiple_dato = 12;
var dato_personalizado = "David Diaz";
dato_personalizado = 12;
// Let vs Var
// la diferencia entre let y var es que let solo se puede usar dentro de un bloque de codigo
// a nivel global var se puede usar en cualquier parte del codigo
var numero1 = 10;
// a nivel de bloque de codigo let solo se puede usar dentro de ese bloque de codigo
var numero2 = 12;
if (numero1 == 10) {
    var numero2_1 = 44; // esta variable no modifica la variable numero2 de fuera del bloque de codigo, si usara var si que modificaria la variable numero2 de fuera del bloque de codigo
    var numero1 = 44;
    console.log(numero1, numero2_1);
}
console.log(numero1, numero2);
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years, pais, numero1, numero2, PI, multiple_dato, dato_personalizado);
