"use strict"

// este es la estructura de una funcion de submit que envia los datos hacia el localstorage para almacenarlos

var formulario = document.querySelector('#formpeliculas'); // referencia a etiqueta de id de HTML

formulario.addEventListener('submit', function () {

    var titulo = document.querySelector('#addpelicula').value;

    if (titulo.length >= 1) {
        localStorage.setItem(titulo, titulo);

    };
});

// este es un ejemplo de como se recorre los elementos que se guardan en el localstorage

var ul = document.querySelector("#peliculas-list");
for (var i in localStorage) {
    console.log(localStorage[i]);
    if (typeof localStorage[i] == "string") {
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li); 
    }

} 

// de esta forma se borra undato del localstorage 
var formDelePeliculas = document.querySelector('#formDelePeliculas'); // referencia a etiqueta de id de HTML

formDelePeliculas.addEventListener('submit', function () {

    var titulo = document.querySelector('#deletepelicula').value;

    if (titulo.length >= 1) {
        localStorage.removeItem(titulo);

    };
});