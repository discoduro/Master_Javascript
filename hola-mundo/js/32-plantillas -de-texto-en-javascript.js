"use strict";


// plantillas de texto 


var nombres = prompt("Digite sus Nombres");
var apellidos  = prompt("Digite sus Apellidos");

// var nombreCompleto = "Mis nombres son :"+ nombres +"</br>"+"y mis apellidos son :"+apellidos;

var texto = `
    <h1>Hola que tal se encuentra</h1>                      
    <h2>Mis Nombres son: ${nombres}</h2>                                                               
    <h2>Mis Apellidos son: ${apellidos}</h2>                                                               
`;
document.write(texto);                           // interpolar es usar el signo $ para llamar variables dentro de plantillas