$(document).ready(function () {

    reloadlink();

    $('#add_button')
    .removeAttr('disabled') // metodo removeattr() sirve para eliminar atributos de un elemento del dom, en este caso se elimina el atributo disabled del boton que esta en el html
    .click(function () {
        $('#menu').prepend('<li><a href="' + $('#add_link').val() + '"></a></li>'); //metodo append y prepend sirven para agregar un obejto antes de y despues de, tambine el metodo html que sirve para incrustar codigo html, besore es para incrustar antes del elemento que esta seleccionado
        $('#add_link').val('') // metodo val sirve para obtener o establecer el valor de un elemento del dom, en este caso se establece el valor de un input vacio
        reloadlink();
    });
});

function reloadlink() {
    // de esta forma se cuenta un grupo de elementos del DOM
    console.log($('a').length);

    // de esta forma se recorre un grupo de elementos de la misma etiqueta que esta en el Dom al que puedo abseder sin ningun problema
    $('a').each(function (index) {        // metodo .each() es una funcion de clalbak y es para recorrer elementos del dom
        var that = $(this);
        var enlace = that.attr('href');       // seleccionar el atributo href cocn el metodo .attr( pasar parametro) y se muestran en consola;

        that.text(enlace); // muestar en la pantalla el enlase que esta como atributo en la variable enlace, la cual selecciona el atributo 'href'

        // modificar atributos a etiquetas en este caso el enlace v
        that.attr('target', '_blank') // mostrar link en otra pagina cuando se de click en el enlace que se agrego por medio del input

        // borra algun atributo que se agrege por medio del input

    });
}