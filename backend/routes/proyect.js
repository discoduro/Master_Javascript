// fichero de configuracion de rutas del controlador proyect
'use strict'

// crear bariable de express para poder crear rutas

var express = require('express');

//  crear una bariable para llamar al controlador y poder usarlo

var ProyectController = require('../controllers/proyect');

// crear una bariable donde voy a cargar mi api

var router = express.Router();


// crear una configuracion del middleweare multipar

    // para usar el middleaware hay que aplicarlo a una ruta para que se ejecute antes que la accion se para como parametro a la ruta

var multiparter = require('connect-multiparty');
var multipartMiddleware = multiparter({uploadDir: './uploads'});


// acceder al metodo home

    router.get('/home', ProyectController.home);
    router.post('/test', ProyectController.test);
    router.post('/save-proyect', ProyectController.saveProyect);
    router.get('/proyect/:id?', ProyectController.getProyect);
    router.get('/proyects', ProyectController.getProyects);
    router.put('/proyect/:_id', ProyectController.updateProyect);
    router.delete('/proyect/:id', ProyectController.deleteProyect);
    router.post('/upload-imagen/:id', multipartMiddleware, ProyectController.uploadImage);

    
    
module.exports = router;

// cargar la configuracion de rutas en el app.js

