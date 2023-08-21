// fichero de configuracion de rutas del controlador proyect
'use strict'

// crear bariable de express para poder crear rutas

var express = require('express');

//  crear una bariable para llamar al controlador y poder usarlo

var MessageController = require('../controllers/message');

// crear una bariable donde voy a cargar mi api

var router = express.Router();


// crear una configuracion del middleweare multipar

    // para usar el middleaware hay que aplicarlo a una ruta para que se ejecute antes que la accion se para como parametro a la ruta

var multiparter = require('connect-multiparty');
var multipartMiddleware = multiparter({uploadDir: './uploads'});


// acceder al metodo home

    router.get('/homeMessage', MessageController.homeMessage); // ejemplo de pireva a conexcion
    router.post('/save-message', MessageController.saveMessage);    //  funciona
    router.get('/message/:id?', MessageController.getMessage);      //  funciona
    router.get('/messages', MessageController.getMessages);         //  funciona
    router.put('/message/:_id', MessageController.updateMessage);   //  funciona
    router.delete('/message/:id', MessageController.deleteMessage); //  funciona
    // router.post('/upload-image/:id', MessageController, ProyectController.uploadImage);   // es para subir una imagen
    // router.get('/get-image/:image',  MessageController.getImageFile);        // consultar la imagen

    
    
module.exports = router;

// cargar la configuracion de rutas en el app.js

