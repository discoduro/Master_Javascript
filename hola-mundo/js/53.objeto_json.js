"use strict"

/*
que es un objeto JSON?
RTA
JSON son la siglas de javascrip objet notation 
notacion de objeto de javascrip y permite crear objetos de forma sencilla y simple 
estos objetos son arraiz asociativos dentro de javascrip y nos permite hacer infinidad de cosas y estructurar los datos de manera 
muy simple y optima y rapida   
*/

// un objeto en javascript se define de la siguiente manera: 

var pelicula = {                                          // crea una bariable
  titulo: 'sacrilegio',                                   // crear un titulo
  year: '2017',                                           // y variables adicionales 
  country: 'EE.UU'                                        // variable adicional
};

// fin objeto 
pelicula.titulo = "Noche sangrinta";             // cambiar propiedades al objeto

console.log(pelicula);

// se puede definir un array con multiples objetos, de igual forma se puede llamar un objeto desde un array.

var peliculas = [
  { titulo: "la gorra", year: "2002", country: "medellin" },
  { titulo: "tormeta", year: "2017", country: "rusia" },
  { titulo: "vanguardia", year: "2011", country: "EE:UU" },
  { titulo: "tristesa", year: "2016", country: "Asia" },
  { titulo: "locuras", year: "2021", country: "colombia" },
  { titulo: "narcos", year: "2012", country: "mexico" },
  { titulo: "la huija", year: "2001", country: "Nueva selanda" },
  pelicula
];

// console.log(peliculas);

var caja_peliculas = document.querySelector("#peliculas");
var index;
for (index in peliculas) {
  var p = document.createElement('p');
  p.append(peliculas[index].titulo+"-"+peliculas[index].year+"-"+peliculas[index].country);
  caja_peliculas.append(p);
}
