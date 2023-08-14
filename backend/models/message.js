'use strict'

const { default: mongoose} = require('mongoose');

// definir una variable para el esquema
const Schema = mongoose.Schema;

// crear una variable con el esquema de la base de datos en mongodb
var MessageSchema  = Schema({
    nombre: String,
    fecha: String,
    asunto: String,
    correo: String,
    mensaje: String,
});

// exporto el esquema
module.exports = mongoose.model('message', MessageSchema, 'message'); 