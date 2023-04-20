"use estric"

/*muestre todos los numeros divisores de un numero que se  introduce en prompt*/

var numero = parseInt(prompt("introduce un numero", 1));

for(var i = 1; i <= numero; i++ ){
    if(numero%i == 0){
        console.log("divisor:"+ i);
    }
}



