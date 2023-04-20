alert(
  "Esta a punto de ver una pequeña introduccion a TypeScript y sus tipos de datos "
);

// Tipos de datos en TypeScript (JavaScript)

// String
let cadena: string = "David Diaz";

// Number
let numero: number = 12;

// Boolean
let verdadero_falso: boolean = true;

// Any (Cualquier tipo de dato)
let cualquiera: any = "Hola";

// Arrays
let lenguajes: Array<string> = ["PHP", "JS", "CSS"];

// Arrays indica el tipo de dato y el numero de elementos que tendra el array
let years: number[] = [12, 13, 14];

// Array conjunto de datos de diferentes tipos
let pais: any[] = ["España", 12, true, "Colombia"];

// Constantes
const PI = 3.1416;

// multiples tipos de datos asignados a una variable
let multiple_dato: string | number = "David Diaz";
multiple_dato = 12;

let dato_personalizado: alfanumerico = "David Diaz";
dato_personalizado = 12;

// tipos de datos personalizados o customizados
type alfanumerico = string | number;

// Let vs Var

// la diferencia entre let y var es que let solo se puede usar dentro de un bloque de codigo

// a nivel global var se puede usar en cualquier parte del codigo
var numero1 = 10;

// a nivel de bloque de codigo let solo se puede usar dentro de ese bloque de codigo
let numero2 = 12;

if (numero1 == 10) {
  let numero2 = 44; // esta variable no modifica la variable numero2 de fuera del bloque de codigo, si usara var si que modificaria la variable numero2 de fuera del bloque de codigo
  var numero1 = 44;
  console.log(numero1, numero2);
}
console.log(numero1, numero2);

console.log(
  cadena,
  numero,
  verdadero_falso,
  cualquiera,
  lenguajes,
  years,
  pais,
  numero1,
  numero2,
  PI,
  multiple_dato,
  dato_personalizado
);
