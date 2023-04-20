"use stricr";



/*ajax dentro de jquery

ajax es una tecnologia que permite hacer pericion asincronas a un servidor sin tener que recargar la pagina
*/

window.addEventListener("load", () => {
    $(document).ready(function () {     // metodo ready sirve para que el codigo se ejecute cuando el documento este listo para ser ejecutado
        // metodo load
        // $("#datos").load("https://reqres.in/"); // metodo load sirve para realizar peticion ajax y cargar los datos en un elemento html

        // metodo get se envian datos al servidor y se recibe una respuesta

        $.get("https://reqres.in/api/users", { page: 2 }, function (response) { // metodo get sirve para realizar peticion ajax y cargar los datos en un elemento html

            console.log(response); // se imprime en consola el objeto response  que contiene los datos de la peticion ajax  realizada
            response.data.forEach((element, index) => { // se recorre el objeto response.data que contiene los datos de los usuarios    

                $("#datos").append("<p>" + element.first_name + " " + element.last_name + "</p>"); // se imprime en el elemento html con id datos los datos de los usuarios
            });
        });


        // metodo post se envian datos al servidor y se recibe una respuesta  

        // sirve para crear un nuevo registro en la base de datos

        $("#formulario").submit(function (e) { // se crea un evento submit para el formulario con id formulario
            e.preventDefault(); // se evita que el formulario se envie al servidor

            // recojer los datos del formulario y crear un objeto con ellos 
            var usuario = {
                name: $('input[name="name"]').val(), // se obtiene el valor del input con name name
                web: $('input[name="web"]').val() // se obtiene el valor del input con name web
            };

            // console.log(usuario); // se imprime en consola el objeto usuario

            // $.post("https://reqres.in/api/users", usuario, function (response) { // metodo post sirve para realizar peticion ajax y cargar los datos en un elemento html
            //     console.log(response); // se imprime en consola el objeto response  que contiene los datos de la peticion ajax  realizada

            // }).done(function () { // metodo done sirve para ejecutar una funcion cuando la peticion ajax se ha realizado correctamente
            //     alert("Usuario añadido correctamente");
            // });
            // return false; // se evita que el formulario se envie al servidor


            // metodo $.ajax permite hacer peticiones ajax de forma manual
            $.ajax({
                type: 'POST', // tipo de peticion
                url: $(this).attr('action'), // url a la que se hace la peticion
                data: usuario, // datos que se envian al servidor

                beforeSend: function () { // metodo beforeSend sirve para ejecutar una funcion antes de que se envie la peticion ajax
                    console.log("Enviando usuario...");
                },
                success: function (response) { // metodo success sirve para ejecutar una funcion cuando la peticion ajax se ha realizado correctamente
                    console.log(response);
                },
                error: function () { // metodo error sirve para ejecutar una funcion cuando la peticion ajax se ha realizado incorrectamente
                    console.log("Ha ocurrido un error");
                },
                setTimeout: 10000 // tiempo de espera para la peticion ajax

            });
            return false; // se evita que el formulario se envie al servidor
        });
    });
});


