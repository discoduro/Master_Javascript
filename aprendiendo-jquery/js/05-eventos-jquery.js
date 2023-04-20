"use strict";

$(document).ready(function () {
    // alert("EVENTOS CARGADOS")

    // revisar como se realiza el evento mouseOver desde stilos css

    // eventos con los metodos: mouseOver  y mouseOut con javascript

    var caja = $('#componente2');

    caja.mouseover(function () {
        $(this).css('background', 'green');
    });


    caja.mouseout(function () {
        $(this).css('background', 'red');
    });


    // eventos con el metodo hover

    // sirve para obtimisar aun mas el codigo a diferencia de usa el mouseover y el mouseout


    var caja3 = $('#componente3');

    function cambiaGris() {
        $(this).css('background', 'blue');
    };

    function cambianarangado() {
        $(this).css('background', 'orange');
    };

    caja3.hover(cambiaGris, cambianarangado)


    // eventos de click y doble click 
    caja3.click(function () {
        $(this).css('background', 'violet')
            .css('color', 'white')
    })

    caja3.dblclick(function () {
        $(this).css('background', 'brown')
            .css('color', 'white')
    })

    // Evento focus y blur
    var nombre = $('#nombre')
    var datos = $('#contenido')
    // focus se aplica 
    nombre.focus(function () {
        $(this).css('border', '5px solid green');
    });

    // blur se aplica sobre el border del input 
    nombre.blur(function () {
        $(this).css('border', ' 5px solid red');
        datos.text($(this).val()).show();        // metodo show sirbe para mostrar un elemeto
        //  $(this).val()  // de esta forma es como se guarda los datos incrustados en un input / para mostrarlo se llama el metodo .text() y se incrusta el codigo para que se vea 
    });


    // eventos mousedown y mouseup
    datos.mousedown(function () {
        $(this).css('border-color', 'gray'); // cuando se de click en un elemento la funsion .mousedown() lo que hace es cambiarle las propiedades que tiene para que se visualicen  
    })
    datos.mouseup(function () {
        $(this).css('border-color', 'black');    // lo que hace el metodo .mouseup() es dar la abcion de a cambiar el estilo en caso de levantar el mouse 
    })

    // evento mousemove lo que hace es perseguir al ratos por donde se desplace toando sus cordenadas
    $(document).mousemove(function(){
        var sigueme = $('#sigueme')
        // console.log(event.clientX); // cordenadas del ratos
        // console.log(event.clientY); // cordenadas del ratos
        $('body').css('cursor', 'none');
        sigueme.css('left', event.clientX);
        sigueme.css('top', event.clientY);
        
    });
});








