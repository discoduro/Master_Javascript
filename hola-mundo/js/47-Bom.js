"use strict"

// que es el Bom 

/*
 BOM significa - browser Object Model
 es decir cómo pudo trabajar con los elementos que nos da el navegador web
*/

// con la propiedd (window) puede acseder a las propiedades del navegador

function getBom() {
    console.log(window.innerWidth); // ver los pixeles de ancho la pagina web
    console.log(window.innerHeight); // ver los pixeles de alto la pagina web
}
 getBom();

console.log(screen.height);
console.log(screen.width);  // es lo mismo que innerWidth y Heigth


// sacar la url actual donde estamos 

console.log(window.location);
console.log(window.location.href);

// realizar fnucion que redirija a otra url pasandole parametros por consola

function redirec(url){
    window.location.href=url;
}

// realizar funcion que en ves de redirijir abra una ventana del navegador 

function ventana(url){
    window.open(url, "", "width=500, height=400");

}
