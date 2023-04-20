"use strict";

// arrays mutifiuncionales 
// son simplemenmte arrays dentro de otros arrays 

var motos = ["pulsar", "apache", "yamaha2.5"]; 
var carros = ["logan", "nissan", "mishusbihi"]; 

var vehiculo = [motos, carros];

console.log(vehiculo[0][1]);

console.log(vehiculo[1][2]);