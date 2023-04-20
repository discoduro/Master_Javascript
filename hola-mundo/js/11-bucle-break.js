// break dentro de un bucle nos permite salir de la 
// estructura de control y dejar de ejecura el bucle 

// 

var year = 2018;

while (year != 1999){
    // ejecute esto
    console.log("estamos en el año:"+ year);
    // aca le digo hasta se ejecute hasta la 2200
    if( year == 2200){
        break; // detiene el bucle cuando llega a 2200
    }
year++;
}