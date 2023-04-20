"use strict"
/*
los eventos son : funciones  que se ejecuta cada vex que sucede algo en la pagina web 
*/
// eventos de rato
// para capturar eventos desde el Html se utiliza la funcion Onclick desde la etiqueta Html por medio de un Id
// de esta forma se captura un elemeto desde el codigo html pero son malas practias porque se esta convinando el js en el HTml

var boton = document.querySelector("#oprimir");

function cambiaColor() {
    console.log("me has dado click")
    var bg = boton.style.background;
    if (bg == "green") {
        boton.style.background = "red";
    } else {
        boton.style.background = "green";
    }

    return "true";

}

// canturar un evento de click
boton.addEventListener('click', function() {
    cambiaColor();
    this.style.padding = "30px"; // llamando al objeto boon con this me trae todo los componentes de ese objeto y puedo adseder para modificar lo que quiera.
});// con el metodo .addEventListener() se cantura los eventos desde el js 

// cacturar un evento de mouse hover
boton.addEventListener('mouseover', function () { //el evento (mouseover) se ejecuta cuando paso por encima del elemento HTML 
    boton.style.background = "yellow";
});

// canturar evento de mouseout
boton.addEventListener('mouseout', function () { //el evento (mouseout) se ejecuta cuando salgo de encima del elemento HTML 
    boton.style.background = "orange";
})