"use stric"


// timers 


// el metodo (setInterval) permite ejecutar una funciopn de callbak casa sierto determinado de tiempo  

// el metodo (setTimeout) solo se ejecuta una ves dependiendo del timepo que le indiquemos 


window.addEventListener("load", () => {
    function intervalo() {
        var tiempo = setInterval(function () {
            console.log("set interval ejecutado");
            var encavezado = document.querySelector("h1");
            if (encavezado.style.fontSize == "50px") {
                encavezado.style.fontSize = "20px";
            } else {
                encavezado.style.fontSize = "50px";
            }
        }, 1000);

        return tiempo;
    }



    var tiempo = intervalo();
    var stop = document.querySelector("#stop");

    stop.addEventListener("click", () => {
        alert("has detenido el intervalo en bucle");
        clearInterval(tiempo);  // el metodo (cleraInterval) lo que hace es capturar el evento y detenerlo pasandole como parametro la Variable tiempo
    });

    var go = document.querySelector("#go");
    go.addEventListener("click", () => {
        alert("has inicializado el intervalo en bucle");
        intervalo();
    });


});

