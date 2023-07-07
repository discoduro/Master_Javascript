'use strit'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivos de rutas
var proyect_routes = require('./routes/proyect');


// middlewares

// es una capa que se ejecuta antes de ejecutar la acion de un controlador, y despue sla funcion principal que se llama

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//  cord


// rutas
 
app.use('/api', proyect_routes);


    // usando el metodo http get    
    // la reques es la peticion que hago como cliente
    // la res es la response que se esta enviando 
    // ir a la ruta para verificar que se este ejecutando corectamente

    // rutas de prueba

//     app.get('/test', (req, res)=>{
//     res.status(200).send(
//         "pagina de inicio"
//     );
// })

// app.get('/desarrollo/:_id', (req, res)=>{
//         // recojer datos que se pasar por postman
//         // consulta la infromaciuon de la peticion para recojerla
//         console.log(req);
//         // accesder al metodo o a una propiedad
//         console.log(req.body.nombre);
//         console.log(req.query.web);
//         //  se usa el metodo params cuando se agrege un parametro a la ruta
//         console.log(req.params._id);



//     res.status(200).send({
//         message: "Hola mundo desde mi API de NodeJS"
//     });
// })

// expotar
module.exports = app;


// CLIENTE RESFULL POSTMAN