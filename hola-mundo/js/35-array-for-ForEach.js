"use stric";

// uso del forEach, sirve para recorrer un array por medio de una la funcion (ForEach), suele se llamada programacion funcional porque se manejan funciones definidad por defecto del elnguaje de programacion.

var motos = ["pulsar", "apache", "yamaha2.5"];

document.write("<ul>")
motos.forEach((motos, indice) => {
document.write("<li> "+indice, motos+" </li>");
});
document.write("</ul>");


