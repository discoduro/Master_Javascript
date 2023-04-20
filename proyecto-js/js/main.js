window.onload = function () {

    if (window.location.href.indexOf('index') > -1) {
        // Slider
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
        });
    }

    if (window.location.href.indexOf('index') > -1) {   // Si estamos en la pagina de index ejecutamos el codigo de abajo
        // Posts
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sequi rem animi dolorem laboriosam placeat doloremque quis harum rerum vel fugiat doloribus eveniet nobis, aut tenetur laborum dolor! Perspiciatis molestias veniam dicta? Aperiam optio id esse quos praesentium quasi quisquam obcaecati, fugiat tempore ad quas, nesciunt, porro incidunt nihil nulla quia aliquid culpa repudiandae accusamus sapiente adipisci harum eum dolore eos. Ea laborum ratione veniam ex quae labore suscipit numquam esse aspernatur quasi. Unde nobis nihil, nam, enim minus, magni eveniet sapiente facilis sequi numquam quis nulla rem minima adipisci aut vel voluptatibus beatae non nemo amet mollitia consequuntur. Maxime dignissimos molestias magni nam voluptates rem blanditiis, nihil sit quis perspiciatis cum. Ipsum dolores ipsa repellat consectetur labore delectus voluptas suscipit eos, quae quos sunt? Eos, ullam. Totam, sit distinctio architecto assumenda perferendis facilis, nobis exercitationem, ab impedit perspiciatis sunt esse quia. Fugit nesciunt at, quis aut optio corporis obcaecati!zz    .'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sequi rem animi dolorem laboriosam placeat doloremque quis harum rerum vel fugiat doloribus eveniet nobis, aut tenetur laborum dolor! Perspiciatis molestias veniam dicta? Aperiam optio id esse quos praesentium quasi quisquam obcaecati, fugiat tempore ad quas, nesciunt, porro incidunt nihil nulla quia aliquid culpa repudiandae accusamus sapiente adipisci harum eum dolore eos. Ea laborum ratione veniam ex quae labore suscipit numquam esse aspernatur quasi. Unde nobis nihil, nam, enim minus, magni eveniet sapiente facilis sequi numquam quis nulla rem minima adipisci aut vel voluptatibus beatae non nemo amet mollitia consequuntur. Maxime dignissimos molestias magni nam voluptates rem blanditiis, nihil sit quis perspiciatis cum. Ipsum dolores ipsa repellat consectetur labore delectus voluptas suscipit eos, quae quos sunt? Eos, ullam. Totam, sit distinctio architecto assumenda perferendis facilis, nobis exercitationem, ab impedit perspiciatis sunt esse quia. Fugit nesciunt at, quis aut optio corporis obcaecati!zz    .'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sequi rem animi dolorem laboriosam placeat doloremque quis harum rerum vel fugiat doloribus eveniet nobis, aut tenetur laborum dolor! Perspiciatis molestias veniam dicta? Aperiam optio id esse quos praesentium quasi quisquam obcaecati, fugiat tempore ad quas, nesciunt, porro incidunt nihil nulla quia aliquid culpa repudiandae accusamus sapiente adipisci harum eum dolore eos. Ea laborum ratione veniam ex quae labore suscipit numquam esse aspernatur quasi. Unde nobis nihil, nam, enim minus, magni eveniet sapiente facilis sequi numquam quis nulla rem minima adipisci aut vel voluptatibus beatae non nemo amet mollitia consequuntur. Maxime dignissimos molestias magni nam voluptates rem blanditiis, nihil sit quis perspiciatis cum. Ipsum dolores ipsa repellat consectetur labore delectus voluptas suscipit eos, quae quos sunt? Eos, ullam. Totam, sit distinctio architecto assumenda perferendis facilis, nobis exercitationem, ab impedit perspiciatis sunt esse quia. Fugit nesciunt at, quis aut optio corporis obcaecati!zz    .'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sequi rem animi dolorem laboriosam placeat doloremque quis harum rerum vel fugiat doloribus eveniet nobis, aut tenetur laborum dolor! Perspiciatis molestias veniam dicta? Aperiam optio id esse quos praesentium quasi quisquam obcaecati, fugiat tempore ad quas, nesciunt, porro incidunt nihil nulla quia aliquid culpa repudiandae accusamus sapiente adipisci harum eum dolore eos. Ea laborum ratione veniam ex quae labore suscipit numquam esse aspernatur quasi. Unde nobis nihil, nam, enim minus, magni eveniet sapiente facilis sequi numquam quis nulla rem minima adipisci aut vel voluptatibus beatae non nemo amet mollitia consequuntur. Maxime dignissimos molestias magni nam voluptates rem blanditiis, nihil sit quis perspiciatis cum. Ipsum dolores ipsa repellat consectetur labore delectus voluptas suscipit eos, quae quos sunt? Eos, ullam. Totam, sit distinctio architecto assumenda perferendis facilis, nobis exercitationem, ab impedit perspiciatis sunt esse quia. Fugit nesciunt at, quis aut optio corporis obcaecati!zz    .'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sequi rem animi dolorem laboriosam placeat doloremque quis harum rerum vel fugiat doloribus eveniet nobis, aut tenetur laborum dolor! Perspiciatis molestias veniam dicta? Aperiam optio id esse quos praesentium quasi quisquam obcaecati, fugiat tempore ad quas, nesciunt, porro incidunt nihil nulla quia aliquid culpa repudiandae accusamus sapiente adipisci harum eum dolore eos. Ea laborum ratione veniam ex quae labore suscipit numquam esse aspernatur quasi. Unde nobis nihil, nam, enim minus, magni eveniet sapiente facilis sequi numquam quis nulla rem minima adipisci aut vel voluptatibus beatae non nemo amet mollitia consequuntur. Maxime dignissimos molestias magni nam voluptates rem blanditiis, nihil sit quis perspiciatis cum. Ipsum dolores ipsa repellat consectetur labore delectus voluptas suscipit eos, quae quos sunt? Eos, ullam. Totam, sit distinctio architecto assumenda perferendis facilis, nobis exercitationem, ab impedit perspiciatis sunt esse quia. Fugit nesciunt at, quis aut optio corporis obcaecati!zz    .'
            },
        ];

        // seleccionar el template en el DOM 
        posts.forEach((item, index) => {
            var post = ` 
        <article>
        <h1>${item.title}</h1>
        <span class="date">${item.date}</span>
        <p>
        ${item.content}
        </p>
        <a href="" class="buttom-more">Leer Mas</a>
    </article>
        `;
            $(".post").append(post);
        });
    }  // fin de la funcion

    // cambiar el tema de la web
    var theme = $("#theme");
    $("#to-red").click(function () {
        theme.attr("href", "css/red.css");
    });
    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css");
    });
    $("#to-green").click(function () {
        theme.attr("href", "css/green.css");
    });

    // scroll arriba de la web
    $(".subir").click(function (e) {
        e.preventDefault(); // para que no se recargue la pagina
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // login falso

    $("#login form").submit(function () {
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);   // para guardar en el local storage
    });
    var form_name = localStorage.getItem("form_name"); // para recuperar el valor del local storage

    if (form_name != null && form_name != "undefined") {
        var nombre = $("#nombre");
        var cerrar_sesion = $("#cerrar_sesion");

        nombre.html("<strong>Bienvenido, " + form_name + "</strong>"); // cambiar el texto del parrafo
        cerrar_sesion.append("<a href='#' id='logout'>Cerrar Sesion</a>"); // agregar un enlace
        $("#login").hide();                            // ocultar el formulario
        $("#logout").click(function () {               // al hacer click en el enlace de cerrar sesion se ejecuta la funcion 
            localStorage.clear();                      // para borrar el local storage
            location.reload();                         // para recargar la pagina
        });
    }
    
    
    // acordeon
    if (window.location.href.indexOf('sobre_mi') > -1) {
        $("#acordeon").accordion();
    }

    // reloj dinamico en tiempo real
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function () {                       // para que se ejecute cada segundo
            var reloj = moment().format("hh:mm:ss");    // para obtener la hora actual moment.js
            $("#reloj").html(reloj);
        }, 0); // cada segundo
    }

    // validacion de formulario

    if(window.location.href.indexOf('contact') > -1){
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
		    lang: 'es',
            // muestra los errores en la parte superior de la pagina
		    errorMessagePosition: 'top',
            // muestra los errores en un tooltip
		    scrollToTopOnError: true
		});

	}
}


