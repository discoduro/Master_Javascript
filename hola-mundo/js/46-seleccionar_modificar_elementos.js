"use strict"

// es una funcion 
function cambiaColor(color) {
    header.style.background = color;
}

// conseguir un elemento por un Id concreto
var header = document.getElementById("header"); // para conseguir un elemento por un Id concreto se usa el metodo (.getElementById();) 
console.log(header);
header.style.background = "green";
header.innerHTML = "se modifica el contenido temporalmemte"


// conseguir un elemento por su etiqueta 
var todosDivs = document.getElementsByTagName("div");  // el metodo document.getElementsByTagName() invoca todas las etiqtetas que se llamen a tarves del string
console.log(todosDivs);

//para acceder a alguna propiedad del array se realizar de la sigueinte forma 
todosDivs[2].style.background = "red";
todosDivs[3].style.background = "yellow";
todosDivs[4].style.background = "black";
todosDivs[5].style.background = "blue";

// para hacer que el elemento devuelva el texto se usa a propiedad (textContent)
var texto = todosDivs[5].textContent;
console.log(texto);


// se puede recorrer el elemento como si fuera un array
var divs;
for (divs in todosDivs) {
    if (todosDivs[divs].textContent) {
        var parrafo = document.createElement("p"); // para crear un elemento HTML con javascript se realiza con el metodo (.document.createElement("p"))
        var texto = document.createTextNode(todosDivs[divs].textContent); // de esta forma le indica que me retorne el valor la iteracion sobre el erray
        parrafo.append(texto); // .appen significa añade despues y prepend significa añadir antes - añade contenido dentro de otro Id o dentro de otro elemento HTml 
        var session = document.getElementById("caja1").append(parrafo);
    }
}

/*
 Para seleccionar muchos elementos existe el método (querySelectorAll), te dejo una referencia por aquí:
*/

// conseguir un elemento por una clase css

var elementoClass = document.getElementsByClassName('clase1');// usando este metodo getElementsByClassName() se invoca una clase
var caja2 = document.getElementsByClassName('clase2');
caja2[0].style.background = "yellow";

var div = "string";
for(div in elementoClass){
    if(elementoClass[div].className == "clase1"){
        elementoClass[div].style.background = "red";  
    }; 
}


// conseguir los elementos de una clase con el metodo queryselector()

// var clase1  = document.querySelector("#clase1");
// console.log(clase1);



