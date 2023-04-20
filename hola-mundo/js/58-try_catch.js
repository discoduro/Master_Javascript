"use strict";


//estructura try catch para capturar y controlar errores
try{                                                            // que codigo que es susectible a que falle se pone enn  el try
    var year = 2019;
    alert(year);
    var conjunto = new Array(9999993874575087268709760938709);
    // console.log(decodeURIComponent("https://www.udemy.com/home/my-courses/learning/"));  //pasarle una url con caracteres raros para ver el error 

}catch(error){                                                  // el catch es donde queda capturado el error
    console.log(error);
    alert ("ha ocurrido un error en el codigo");

}


