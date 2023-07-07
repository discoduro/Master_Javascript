'use strict';
 
// de esta forma cacturo los datos que le paso por la consola de node
//  se le pone indice 2 para que no retorne el indice 1 que es la ruta del archivo
var params = process.argv.slice(2);

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

console.log(numero1);
console.log(numero2);

var plantilla=`
    la suma es: ${numero1+numero2}
    la resta es: ${numero1-numero2}
    la multiplicaciones: ${numero1*numero2}
    la division es: ${numero1/numero2}
`;

console.log(plantilla);

//  de est forma imprimo los datos recojidos
console.log(params); 
console.log('hola mundo con node js');