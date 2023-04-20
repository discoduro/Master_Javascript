"use strict"

/*desarrollar un progarma que indique si un numero es par o es inpar
1 por venta pormpt
2 si no es valido que nos pida de nuevo el numero 
*/

var numero = parseInt(prompt("introduce un numero", 0));

while(isNaN(numero)){
    numero = parseInt(prompt("introduce un numero", 0));
}
if(numero % 2  == 0){
    alert("el numero es par");
}else{
    alert("el numero es inpar");
}