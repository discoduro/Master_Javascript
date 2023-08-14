'use strict'

// primera forma de conexcion a base de datos

const { default: mongoose } = require("mongoose");

// llama la clase documento app.js
var app = require('./app')
// define el puerto
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/portafolio')
    .then(() => {
        console.log('Conexion a la base de datos establecida satisfactoriamente...');

        // creacion servidor

        app.listen(port, () => {
            console.log('Servidor corriendo correctamente en la url Localhost:3700');
        })



    })
    .catch(err => console.log(err)
    );


// segunda forma de conexcion a base de datos


// const mongoose = require('mongoose');

// // URL de conexión a tu base de datos MongoDB
// const url = 'mongodb://localhost:27017/portafolio';

// // Opciones de configuración de la conexión
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// };

// // Conexión a la base de datos
// mongoose.connect(url, options)
//   .then(() => {
//     console.log('Conexión exitosa a MongoDB');
//     // Aquí puedes comenzar a realizar operaciones con la base de datos
//   })
//   .catch(error => {
//     console.error('Error al conectar a MongoDB:', error);
//   });


// crear un servidor con nodejs y express
// es el motor de la la plaicacion a nivel de backend, expres permite tener un sistemas de rutas y resibis peticiones http y usar el protocolo http

