"use strict"

//   DOM - DOCUMENT PBJECT MODEL 

// modificar el arbol de etiquetas 
//todas las etiquetas hacen parte del DOM
// se puede modificar el contenido dentro de las etiquetas html 

function cambiaColor(color){
    caja.style.background = color;
}
 
var caja = document.getElementById("ejemplo");  //con el metodo document.getElementById se puede ingresar a la propiedades y se piede seleccionar los elemetos por id () o por calse 
var caja = document.querySelector("#ejemplo");      // con el metodo document.querySelector se puede ingresar a la propiedades y se piede seleccionar los elemetos por id () o por clase
console.log(caja);
    

// se pueden  capturara los elementos con el metodo (innerHTML)
// aparetir del .style le puedo poner la regla de  css que yo quiera 

caja.innerHTML = "es un texto nuevo";
console.log(caja);  
caja.style.background= "green";
caja.style.padding = "30px";


//con el atributo (className) se agregan clases a las etiquetas HTML 
caja.className="caja";

// otra forma de celeccionar un elemento dentro de nuestro documento es el (document.querySelector();)
