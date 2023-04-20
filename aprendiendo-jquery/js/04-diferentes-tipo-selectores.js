"use strict";

/*
lo primero que hay que hacer al usa jQuery es comprobar que el documento este listo
que se refiere a que cargue todo los script

1. el $ se refiere a jQuery. $ ==jQuery
lo que se pone despues del $ lo que va entre parentesis despues es el (selector), 
se puede seleccionar cualquier cosa y despues va el metodo. 
.ready(){

} que es una funcion de calkball


*/

$(Selection).ready(function () {

    // selector de ID
    $("#rojo").css("background", "red") // metodo .css puedo ingresar a las propiedades de esa etiqueta seleccionada la cual va a pedir dos parametros, 1 la clave = background y el valor = red.
        .css("color", "white");
    $("#amarillo").css("background", "yellow")
        .css("color", "green");
    $("#verde").css("background", "green")
        .css("color", "white");


    // selectores de clases

    //un selector de clase lo que hace es seleccionar los elemntos del dom en base a una clase
    // Una clase es cuando necesito seleccionar barios elemente comunes para darles un estilo o estructura en comun a las clases que coincidan
    // El ID es un identificador unico de una etiqueta que no se repite.
    // un conjunto de elementos con la misma clase se puede recorrer como si fuera un array y se puede usar su propiedad

    var mi_clase = $('.zebra'); // estilos incrutados a unica propiedad, desde los stylos css son en general 
    // console.log(miClase.eq(0));             // metodo eq( ) sirve para selñeccionar un elemento de un array
    // si se realiza de la forma antes hecha es tiene metodos de jQuery ya juntos para lo cual se podran hacer mas cosas.

    // de esta forma se definen estilos para una propiedad utilizando la funcion de Click
    $(".sin_border").click(function () {
        console.log("Se ha dadio click");
        $(this).addClass("zebra");
    })


    // Selectores de etiquetas

    // si un parrafo es no tiene clase de estilo agregarla y si la tiene eliminarla.
    var parrafos = $('p').css("cursor", "poiner");
    parrafos.click(function () {
        var that = $(this);
        if (!that.hasClass('grande')) {            //el metodo hasClass() lo que hace es buscar y  verificar si el elemneto que le di click tiene la clase que le estoy indicando  
            that.addClass('grande');
        } else {
            that.removeClass('grande');
        }
    })


    // selectores de atributos

    // permiten seleccionar los elemntos o etiquetas HTML  que tengas sieros atributos puestos
    //ejemplo

    // para seleccionar una clase por sus atributos se usa $('[]')
    $('[title="Google"]').css("background", "#ccc");
    $('[title="Facebook"]').css("background", "green");



    // Otros selectores, find y parent

    //para dar un estilo, un margen superior tanto a los parrafos como a los enlaces  se hace de la siguiente forma
    $('p, a').addClass('margen-superior');

    // buscar una clase dentro de un Id dentro del Dom
    // el metodo .find() sirve para buscar dentro de un arbol muy grande de HTML para buscar etiquetas o algo que no sabemos donde esta
    // se hace con el metodo .Find(''.nombre de clase); e imprimir en consola
    // var busqueta = $("#caja").find('.resaltado');
    
    var busqueta = $("#caja").find('.resaltado');
   
    // var busqueta = $("#caja .resaltado");       

    console.log(busqueta);
});
