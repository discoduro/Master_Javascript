"use strict"

window.addEventListener("load", () => {
    console.log("dom cargado");


    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";
    var box_dashed_port = document.querySelector(".port");
    box_dashed_port.style.display = "none";





    formulario.addEventListener('submit', () => {
        console.log("evento submit capturado");

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        if (nombre.trim() == null || nombre.trim().length == 0) {  // trim() metodo que indica que el campo esta vacio y no contine nada.
            alert("el nombre no es valido");
            document.querySelector("#error_nombre").innerHTML = "error al cargar el nombre";
            return false;
        } else {
            document.querySelector("#error_nombre").style.display = "none";
        }
        if (apellidos.trim() == null || apellidos.trim().length == 0) {
            alert("el apellido es invalido");
            return false;
        }
        if (edad == null || edad <= 0 || isNaN(edad)) {
            alert("la edad no es valida");
            return false;
        }


        box_dashed.style.display = "block";
        box_dashed_port.style.display = "block";

        // var dashed = [nombre, apellidos, edad];

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;

        // var indice;
        // for (indice in dashed) {
        //     var parrafo = document.createElement("p");
        //     parrafo.append(dashed[indice]);
        //     box_dashed.append(parrafo);
        // }


    });
});