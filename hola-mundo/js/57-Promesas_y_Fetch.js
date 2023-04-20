"use strict";
// let registros = document.querySelector("#div_promer");
// let div_janet = document.querySelector("#janet");

// getUsuarios()
//     .then(data => data.json())
//     .then(usuario => {
//         ListadoUsuarios(usuario.data);
//         return getJanet();
//     })
//     .then(data => data.json())
//     .then(janet => {
//         mostrarJanet(janet.data);
//     })
// function getUsuarios() {
//     return fetch("https://reqres.in/api/users");
// }
// function getJanet() {
//     return fetch("https://reqres.in/api/users/2");
// }
// function ListadoUsuarios(users) {
//     users.map((user, i) => {
//         let informacion = document.createElement('h4');

//         informacion.innerHTML = i + " " + "Nombre: " + user.first_name + " " + "Apellidos: " + user.last_name;

//         registros.appendChild(informacion);
//         document.querySelector(".loading").style.display = 'none';
//     });
// }
// function mostrarJanet(user) {
//     console.log(user);
//     let informacion = document.createElement('h4');
//     let avatar = document.createElement('img');

//     informacion.innerHTML = "Nombre: " + user.first_name + " " + "Apellidos: " + user.last_name;
//     avatar.src = user.avatar;
//     avatar.width = '100';

//     div_janet.appendChild(informacion);
//     div_janet.appendChild(avatar);
//     document.querySelector(".janet").style.display = 'none';
// };

/*COMO CREAR PROMESAS*/

let registros = document.querySelector("#div_promer");
let div_profesor = document.querySelector("#profesor");
let div_janet = document.querySelector("#janet");


// promesas en cadena
getUsuarios()
    .then(data => data.json())
    .then(usuario => {
        ListadoUsuarios(usuario.data);
        return getInfo();
    })
    .then(data => {
        div_profesor.innerHTML= data;
        return getJanet();
    })
    .then(data => data.json())
    .then(janet => {
        mostrarJanet(janet.data);
    })
    // el metodo .catch() sirve para capturar un error de una promesa 
    .catch(error => {
        alert ("error en la peticiones al servisio rest full") // le indica que imprima el metodo que tiene un funcion de callback que es error
    });
function getUsuarios() {
    return fetch("https://reqres.in/api/users");
}
function getJanet() {
    return fetch("https://reqres.in/api/users/2");
}
// como hacer una promesa, se realizara un ejercicio a continuacion para su respectivo analisis
function getInfo() {           // new sirve para instanciar una clase o crear un objeto y dos condiciones la promesa que es Resolve, reject
    var profesor = {
        nombre: "Alejandro",
        apellido: "Diaz",
        url: "https://localhost/dream_me"
    };
    return new Promise((resolve, reject) => {
        var profesor_string = "";
        setTimeout(function () {                            //setTimeout es una funcion de tiempo y tiene una funcion de callback 
            profesor_string = JSON.stringify(profesor);
            if (typeof profesor_string != 'string' || profesor_string == "") return reject("error de codigo");
            return resolve(profesor_string);
        }, 3000);
    });
}
// la promesas se suelen usar para leer archivos, para enviar datos por post por get por ajax
function ListadoUsuarios(users) {
    users.map((user, i) => {
        let informacion = document.createElement('h4');

        informacion.innerHTML = i + " " + "Nombre: " + user.first_name + " " + "Apellidos: " + user.last_name;

        registros.appendChild(informacion);
        document.querySelector(".loading").style.display = 'none';
    });
}
function mostrarJanet(user) {
    //  console.log(user);
    let informacion = document.createElement('h4');
    let avatar = document.createElement('img');

    informacion.innerHTML = "Nombre: " + user.first_name + " " + "Apellidos: " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';

    div_janet.appendChild(informacion);
    div_janet.appendChild(avatar);
    document.querySelector(".janet").style.display = 'none';
};