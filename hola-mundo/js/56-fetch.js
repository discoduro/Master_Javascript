"use strict";
/**
 * 
 * Fetch: es un metodo que permite hacer peticiones ajax a un backent y devuleve los datos en formato json
 *  
 * una peticion ajax es un simplemente una llamada a un servicio rest o  un backent que devuelve unos resultados zy poder hacer cualquier cosa con los datos que se reciben por medio del las peticiones ajax en dato se devuelve en formato json
 * 
 *  
 */


// fetch (ajax) y peticiones a servicios /apis rest
// puede resivir peticiones get, post, pud, delete.
// es un servivio que va a recibir un json y nos devuelve una respuesta en json 
// mediante el backend se estara guardando informacion en la bases de datos y se usan tambien y para eso se hace una api
// fetch (ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector('#usuarios');
var usuarios = [];

fetch('https://jsonplaceholder.typicode.com/users')     // el metodo fetch() recibe una url que devuelva un json, y se convierte en una promesa.
    .then(data => data.json())                          // lo primer que se hace en la promesa es capturar los datos y tranformarlo a un json
    .then(usuario => {                                 // en la bariable data ya estan recojodos los datos 
        usuarios = usuario;                             // dentro de la variable usuarios guardamos los datos acpturados 
        console.log(usuarios);                          // se imprime 

        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = i + ' . ' + 'Nombre: ' + user.name + '.' + ' Nombre de Usuario: ' + user.username + '. ' + 'Email: ' + user.email;
            div_usuarios.appendChild(nombre);
            document.querySelector(".loading").style.display = 'none';   
        });
    });

        


