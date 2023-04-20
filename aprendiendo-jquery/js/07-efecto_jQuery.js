"use strit";

$(document).ready(function () { // metodo ready sirve para que el codigo se ejecute cuando el documento este listo para ser ejecutado
    // alert('hola mundo');

    // mostrar y ocultar elementos
    // hide() y show() son metodos de jQuery para mostrar y ocultar elementos del DOM
    $('#Mostrar').hide(); // ocultar el boton mostrar

    $('#Mostrar').click(function () {
        $(this).hide(); // ocultar el boton mostrar
        $('#Ocultar').show('fast'); // mostrar el boton ocultar - fast es un efecto de jQuery para mostrar el boton   mas rapido  que el normal   
        $('#caja').show(); // mostrar la caja con un efecto normal
        // $('#caja').fadeIn('slow'); // mostrar la caja con un efecto de desvanecimiento
        // $('#caja').fadeTo('slow', 0.7); // mostrar la caja con un efecto de desvanecimiento y con una opacidad del 50%
        // $('#caja').slideDown('slow'); // slideDown es un metodo de jQuery que sirve para mostrar y ocultar elementos del DOM  con un solo boton


    });

    $('#Ocultar').click(function () {
        $(this).hide(); // ocultar el boton ocultar
        $('#Mostrar').show('fast'); // mostrar el boton mostrar
        $('#caja').hide(); //   ocultar la caja con un efecto normal
        //     $('#caja').fadeOut('slow'); // ocultar la caja con un efecto de desvanecimiento
        //     $('#caja').fadeTo('slow', 0.2); // mostrar la caja con un efecto de desvanecimiento y con una opacidad del 50%
        //     $('#caja').slideUp('slow'); // slideUp es un metodo de jQuery que sirve para mostrar y ocultar elementos del DOM  con un solo boton
    });

    $('#TodoEnUno').click(function () { // mostrar y ocultar la caja con un solo boton
        // $('#caja').toggle('fast'); // toggle es un metodo de jQuery que sirve para mostrar y ocultar elementos del DOM  con un solo boton
        $('#caja').fadeToggle('fast'); // fadeToggle es un metodo de jQuery que sirve para mostrar y ocultar elementos del DOM  con un solo boton
        // $('#caja').slideToggle('fast'); // slideToggle es un metodo de jQuery que sirve para mostrar y ocultar elementos del DOM  con un solo boton
        // $('#caja').slide('fast'); // toggle es un metodo de jQuery que sirve para mostrar y ocultar elementos del DOM  con un solo boton  


         // asideup es un metodo de jQuery que sirve para mostrar y ocultar elementos del DOM  con un solo boton asi mismo contiene una funcion de callback que indicara cuando se ha terminado de ejecutar el metodo
        $('#caja').slideUp('fast', ()=>{
            console.log('se ha terminado de ejecutar el metodo asideup');
        });

    })


    /* animaciones con Jquery    */

    $('#animar').click(function () {
        $('#caja').animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '110px'
        }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '80px'
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0px'
            }, 'slow')
        $('#caja').animate({
            marginLeft: '500px',
            fontSize: '40px',
            height: '110px',
            borderRadius: '0px'
        }, 'slow')
    });
}, 'slow');