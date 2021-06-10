'use strict'
// Requires
const express = require('express')
const conectarDb = require('./config/db')
const cors = require('cors')

// Imports for Routes
const producto = require('./routes/producto')

// Crear el servidor 
const app = express()

// Conectar a Base de Datos
conectarDb()
app.use(cors())
app.use(express.json())

    // Rutas
        // app.get('/', (req,res)=>{
        //     res.send("hola mundo")
        // })
        app.use('/api/productos/', producto)

// Listen Server
app.listen(3030, () => console.log(`Servidor corriendo en puerto 3030`) )