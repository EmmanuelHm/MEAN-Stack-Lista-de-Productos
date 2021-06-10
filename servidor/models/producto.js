const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    fechaCreacion: {type: Date, default: Date.now() }
})

const Producto = mongoose.model('producto', productoSchema)

module.exports = Producto