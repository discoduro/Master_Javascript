"use strict";

// operaciones con arrays

var peliculas = ["el aro", "la cabaña del terror", "el payaso IT"];
var series = ["los siete pecados acpitales", "lucifer", "los peakyn blanders"];

// de esta forma se añade un parametro a un array --------------------------------------------------------------------------------------

var entreteimiento = "";
do {
  entreteimiento = prompt("introduce una pelicula");
  peliculas.push(entreteimiento); // el metodo (push) sirve para agregar un parametro a un array
} while (entreteimiento != "acabar");

console.log(peliculas);

// de esta forma se elimina el ultimo parametro de un array utilizando el metodo (POP)

peliculas.pop(); 
peliculas.pop();
peliculas.pop();


// se puede cambiar un parametro a indefinido de la siguiente forma 

peliculas[0] = undefined;

// para eliminar un parametro o un elemento de un array se realiza de la siguiente forma utilisando la funcion 

var eliminar = series.indexOf("lucifer");
console.log(eliminar);

if(eliminar > -1){
    peliculas.splice(eliminar, 1);
}
console.log(peliculas);

// para convertir un array a un string se usa el metodo (join)

var pelicula_string = peliculas.join();
console.log(pelicula_string);
