'use strict'
const proyects = require('../models/proyects');
// importar el modelo

// importar libreria de nodejs para eliminar.
const fs = require('fs');

var Proyect = require('../models/proyects');

// crear la variable del controlador

var controller = {

    // crear los metodos 

    // #1 ruta
    home: function(req, res){
        return res.status(200).send({
            message:'Soy accion home'
        });
    },

    // #2  ruta
    test: function(req, res){
        return res.status(200).send({
            message:'Soy el metodo o accion de test del controlador de proyect'
        });
    },

    // # funcion para guardar
    saveProyect: function(req, res){
         
        // para crear un nuevo proyecto tengo que hacer una bariable dentro de mi proyecto saveProyect
        var proyect = new Proyect();

        // recojer los parametro pasados por body
        var params = req.body;
        proyect.name = params.name;
        proyect.description = params.description;
        proyect.category =  params.category;
        proyect.year = params.year;
        proyect.langs = params.langs;
        proyect.imagen = null;

        // guardar este objeto en la base de datos
        proyect.save()

            .then((proyectStored) => {
                return res.status(200).send({proyect: proyectStored});
            })
            .catch((err) => {
                return res.status(500).send({message: 'error al guardar el documento'});
            });
    },


    // # funcion para listar datos

    // consular objetos de nuestra base de datos
    // hay que crear la ruta

    getProyect: function(req, res) {
        var proyectId = req.params.id;

        if(proyectId == null){
            return res.status(404).send({ message: 'El proyecto no existe' });
        }
    
        Proyect.findById(proyectId)
            .then(proyect => {
                if (!proyect) {
                    return res.status(404).send({ message: 'El proyecto no existe' });
                }
                return res.status(200).send({ proyect });
            })
            .catch(err => {
                return res.status(500).send({ message: 'Error al devolver los datos' });
            });
    },


    // # funcion para devolver listado de proyectos

    getProyects: function(req, res) {

        // metodo .sort() es para ordenar
        Proyect.find({}).sort('year')
   
        .then(proyects => {
            return res.status(200).send({ proyects });
        })
        .catch(err => {
            return res.status(500).send({ message: 'Error al obtener los proyectos' })
        })
        
    },

    
    // funsion para actualizar un proyecto

    updateProyect: function(req, res) {
        // recoje los paeametros enviado por la url en la cual le agrega obligatoriamente in id
        var proyectId = req.params._id;

        // recojer los parametro pasados por body
        var update = req.body;
    
        console.log("proyectId:", proyectId);
        console.log("update:", update);
    
        Proyect.findByIdAndUpdate(proyectId, update, { new: true })
            .then(proyectUpdate => {
                if (!proyectUpdate) {
                    return res.status(404).send({ message: 'El proyecto no existe' });
                }
                return res.status(200).send({ project: proyectUpdate });
            })
            .catch(error => {
                console.error(error);
                return res.status(500).send({ message: 'Error al actualizar el proyecto' });
            });
    },


    // # funcion para eliminar un objeto

    deleteProyect: function(req, res){
        var proyectId =req.params.id;

        Proyect.findByIdAndRemove(proyectId)

        .then(proyectRemove =>{
            if(!proyectRemove){
                return  res.status(404).send({'message':'No se ha encontrado ningun registro con ese ID'})
                }
            return res.status(200).send({message: proyectRemove})
        })
        .catch(err =>{
            console.log(err);
            return res.status(500).send({message: 'Error al eliminar el proyecto'})
        })
    },
    
    //  funcion para subir imagenes al servidor
        // configurar el mutiparter para poder subir imagenes en el archivo de rutas

        uploadImage: function(req, res){
            var proyectId = req.params.id;
            var fileName = 'Imagen no subida...';   
        
            // algoritmo para consultar datos de la imagen y subirla a la base de datos  
            if(req.files && req.files.imagen){

                // sacar valores de la imagen para guardarlo en la base de datos
                var filePath = req.files.imagen.path;
                var fileSplit = filePath.split('\\');
                var fileName = fileSplit[1];
                // comprovar que extencion se esta subiendo y si es correcta. si no lo es que lo borre del la carpeta upload
                // sacar la extencion del archivo y cortar por el punto del archivo que es la extencion del archivo
                var extSplit = fileName.split('\.');
                // extencion o indice 1 del array
                var fileExt = extSplit[1];

                // validar la extencion de la imagen
                if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

                    Proyect.findByIdAndUpdate(proyectId, { imagen: fileName }, { new: true })

                    .then(proyectUpdate => {
                        if (!proyectUpdate) {
                            return res.status(404).send({ message: 'El proyecto no existe' });
                        }
                        return res.status(200).send({ proyect: proyectUpdate });
                    })
                    .catch(err => {
                        console.error('Ha ocurrido un error', err);
                        return res.status(500).send({ message: 'Error al actualizar el proyecto' });
                    })
                }else{
                    fs.unlink(filePath, ()=>{
                        return res.status(200).send({message: 'La extencion no es valida'});
                    });
                }
            } else {
                return res.status(200).send({
                    message: fileName
                });
            }
        }
         
};

module.exports = controller;