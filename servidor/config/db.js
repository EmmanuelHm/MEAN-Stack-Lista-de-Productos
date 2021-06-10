const mongoose = require('mongoose')
require('dotenv').config({ path: 'variables.env' })

const conectarDb = async()=>{
    try {  
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('Base de Datos Conectada')
    } 
    catch (error) {
        console.log(error)
        process.exit() //Detener App
    }
}

module.exports = conectarDb