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
    router.post('/save-message', MessageController.saveMessage);
    router.get('/proyect/:id?', MessageController.getMessage);
    router.get('/message', MessageController.getMessage);
    // router.put('/proyect/:_id', MessageController.updateProyect);
    // router.delete('/proyect/:id', MessageController.deleteProyect);
    // router.post('/upload-image/:id', MessageController, ProyectController.uploadImage);
    // router.get('/get-image/:image',  MessageController.getImageFile);

    
    
module.exports = router;

// cargar la configuracion de rutas en el app.js
