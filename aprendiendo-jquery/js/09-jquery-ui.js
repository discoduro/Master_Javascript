"use stirct";

window.addEventListener("load", function () {

    // this.alert("Cargado el DOM");

    // draggable - arrastrable - arrastrar y soltar elementos en la página web
    $(".elementos").draggable();

    // resizable - redimensionable - redimensionar elementos en la página web
    $(".elementos").resizable();

    // selectable - seleccionable - seleccionar elementos en la página web
    // para manejar selectable se debe seleccionar la lista y no los elementos de la lista

    // $(".lista-seleccionable").selectable();

    // el metodo sortable no funciona si el mismo componente esta usando el metodo selectable
    // sortable - ordenable - ordenar elementos en la página web
    $(".lista-seleccionable").sortable();

    // drop - soltar - soltar elementos en la página web
    $("#elemento-movido").draggable();

    $("#area").droppable({
        drop: function () {
            console.log("Has soltado algo dentro de mi");
            $(this).css("background", "green");
        }
    });

    //efectos
    $("#mostrar").click(function () {
        $(".caja-efectos").toggle("fade", 4000);

        $(".caja-efectos").toggle("explode");
        $(".caja-efectos").toggle("blind");
        $(".caja-efectos").toggle("slide");
        $(".caja-efectos").toggle("drop");
        $(".caja-efectos").toggle("fold");
        $(".caja-efectos").toggle("puff");
        $(".caja-efectos").toggle("scale");
        $(".caja-efectos").toggle("shake");
        $(".caja-efectos").toggle("size");


    });

    //tooltips - tooltip - mostrar información sobre un elemento
    $(this.document).tooltip();

    // cuadros de dialogos
    $(".lanzar-popup").click(function () {
        $(".popup").dialog();
    });

    // calendario
    $("#calendario").datepicker();

    // tabs
    $("#pestanas").tabs();
});