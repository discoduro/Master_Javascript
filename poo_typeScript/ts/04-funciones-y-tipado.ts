// funciones y tipado

// funcion en javascript sin tipado
function caracter(numero): string{
  return "El numero es: " + numero;
}
console.log(caracter('hola'));


// funcion en typescript con tipado
function getNumber(number: number): string { // number es que tipo de dato va a recibir la funcion y string es que tipo de dato va a devolver la funcion
    return "El numero es: " + number;
  }

console.log(getNumber(12));