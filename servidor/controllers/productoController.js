const Producto = require("../models/producto")

// GET Productos
exports.obtenerProductos = async(req,res) => {

    try {
        const productos = await Producto.find({})
        res.json(productos)
    } 
    catch (error) {
        console.log(error)
        res.status(500).send('Hubo un Error')
    }
}

// GET un solo Producto
exports.obtenerProducto = async(req,res) => {

    try {
        let producto = await Producto.findById(req.params.id)
        if(!producto) return res.status(404).json({msg: 'No existe el Producto'})
        res.json(producto)
    } 
    catch (error) {
        console.log(error)
        res.status(500).send('Hubo un Error')
    }
}

//  POST Crear Producto
exports.crearProducto = async (req, res) => {
    try {
        let producto = new Producto(req.body)

        await producto.save()

        res.send(producto)

    } 
    catch (error) {
        console.log(error)
        res.status(500).send('Hubo un Error')
    }
}

// PUT Actualizar Producto
exports.actualizarProducto = async (req,res) => {

    try{
        const { nombre, categoria, ubicacion, precio } = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({msg: "No existe el producto"})
        }

        producto.nombre = nombre
        producto.categoria = categoria
        producto.ubicacion = ubicacion
        producto.precio = precio

        producto = await Producto.findOneAndUpdate({_id: req.params.id}, producto, {new: true} )
        res.json(producto)
    }
    catch(error){
        console.log(error)
        res.status(500).send('Hubo un Error')
    }

}

// DELETE Eliminar Producto
exports.eliminarProducto = async (req,res) => {

    try {
        let producto = await Producto.findById(req.params.id)

        if(!producto) return res.status(404).json({msg: 'No existe el Producto'})

        await Producto.findOneAndDelete({_id: req.params.id})
        res.json({msg: 'Producto eliminado con exito'})
    } 
    catch (error) {
        console.log(error)
        res.status(500).send('Hubo un Error')
    }
}