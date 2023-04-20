"use strict"

// las funciomes de flecha son usadas en funciones anonimas y para definir funciones de callbacks
// con el fin de escribir menos codigo y que se vea mas limpio, se sustitye la palabra FUNTION por =>.


function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
  var sumar = numero1 + numero2;

  sumaYmuestra(sumar);
  sumaPorDos(sumar);

  return sumar;
}

// por pantalla 
sumame(  
  673,
  873,
   dato => {         // se llama la funicon anonima por medio de felcha =>
    document.write("la suma es:", dato +"<br/>");
  },
   dato => {         // se llama la funicon anonima por medio de felcha =>
    document.write("la suma por dos es:", dato * 2 +"<br/>");
  }
);



// por consola
sumame(  
    673,
    873,
     dato => {         // se llama la funicon anonima por medio de felcha =>
      console.log("la suma es:", dato );
    },
     dato => {         // se llama la funicon anonima por medio de felcha =>
      console.log("la suma por dos es:", dato * 2 );
    }
  );
