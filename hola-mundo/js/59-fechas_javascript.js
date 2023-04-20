"use strict";


// manejar fechas y elementos matematicos

// de la siguiente forma se imprime la fecha esacta en la consola.

let fecha =  new Date();
console.log(fecha);

let year = fecha.getFullYear();
let mes = fecha.getMonth();
let dia = fecha.getDate();
let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds()
let milisegundos = fecha.getMilliseconds()
let texto_dia =  `
    el año es: ${year}
    el mes es: ${mes}
    el dia es: ${dia}
    la hora es: ${hora}
    los minutos son: ${minutos}
    los segundos son: ${segundos}
    los milisegundos son: ${milisegundos}
`;

console.log(texto_dia)