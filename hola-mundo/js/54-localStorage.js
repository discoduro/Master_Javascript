// localStorage

/*
se puede guardar infromacion en la web a modo de sesion
es un espacio de almacenamiento que tenemos disponible en el navegador
*/

// hay que comprovar que el localStorage esta disponible

if (typeof (Storage) != "undefined") {
    console.log("localStorage disponible");
} else {
    console.log("incompatible con localStorage");
}


// como guardar un dato en el localStorage

localStorage.setItem("titulo", "curso de David Diaz");

// recuperar elemento el elemento y metorlo en la pagina web

console.log(localStorage.getItem("titulo")); // recuperando
// document.querySelector('#peliculas').innerHTML = localStorage.getItem('titulo'); // linea de codigo no funciono 
 

// guardar un pobjeto 

var sesion = {
    Email: "aleediaz265@gmail.com",
    password: "1233",
    web: "www.dream_me.com"
}

// // para guardar un objeto en el localStorage es necesario convertir el objeto el un Json string 
localStorage.setItem("usuario", JSON.stringify(sesion));


// //esta es la forma incorrecta de llamar  objeto guardado en el local storage
// document.querySelector("#peliculas").innerHTML=localStorage.getItem("usuario");

// // recuperar un objeto del localstorage en formato Json de javascrip usable 
var josn = JSON.parse(localStorage.getItem("usuario")); // se convierte el estrin a un objeto usable con el metodo json.parse()
console.log(josn);                                      // aplrimo la variavble para obtener el objeto en formato Json Usable
document.querySelector("#peliculas");
peliculas.append(josn.web+" - "+josn.Email); 


// de esta forma se elimina un dato u objeto del localStorage
// localStorage.removeItem("usuario");
// localStorage.removeItem("titulo");

// el metodo clear() sirve para elimiar la informacion del localStorage en el espacio en que se ejecute la linea de codigo, ejemplo. la linea de codigo se ejecuto al finla del ejercicio por lo cual mostrara la infromacion antes solicitada y al final la elimina

localStorage.clear()





