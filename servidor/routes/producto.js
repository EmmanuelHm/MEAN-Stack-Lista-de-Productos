const express = require('express')
const router = express.Router()

// Controller Producto
const productoController = require('../controllers/productoController')

router.get('/', productoController.obtenerProductos)
router.get('/:id', productoController.obtenerProducto)
router.post('/', productoController.crearProducto)
router.put('/:id', productoController.actualizarProducto)
router.delete('/:id', productoController.eliminarProducto)

module.exports = router