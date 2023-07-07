'use strict'

const { default: mongoose } = require("mongoose");



// definir una variable para el esquema
const Schema = mongoose.Schema;

// crear una variable con el esquema de la base de datos en mongodb
var ProyectSchema  = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    imagen: String,
});

// exporto el esquema
module.exports = mongoose.model('proyect', ProyectSchema); 