"use strict"


// el vento (load) sive para cargar el script del Dom en el Head ques lo mas recomendado, y no dejarlo al final de body. 
// para no tener nigun erro por poner el script del Dom en el Head se usa el evento Load y funciona de la siguiente forma 

window.addEventListener("load", () => {
    
    var input = document.querySelector("#campo_nombre");

    input.addEventListener('focus', function(){
        console.log("estas dentro del input");
    });
    
    // eventos de tipo (blur) cuando se ubica fuera del input
    input.addEventListener('blur', function(){
        console.log("estas fuera del input");
    });
    
    // eventos de tipo (keydown) cuando se pulsa una tecla 
    input.addEventListener('keydown', function(event){
        console.log("Pulsando esta tecla ", String.fromCharCode(event.keyCode)); // el metodo (fromCharCode) lo que hace es comvertir el .keycode a un carater o un string
    });
    
    // eventos de tipo (keypress ) se ejecuta cuando se oprime una tecla 
    input.addEventListener('keypress', function(event){
        console.log("tecla pulsada", String.fromCharCode(event.keyCode)); // el metodo (fromCharCode) lo que hace es comvertir el .keycode a un carater o un string
    });
    
    // eventos de tipo (keyup) cactura el evneto cuando levanto el dedo de la tecla 
    input.addEventListener('keyup', function(event){
        console.log("tecla soltada", String.fromCharCode(event.keyCode)); // el metodo (fromCharCode) lo que hace es comvertir el .keycode a un carater o un string
    });
});
