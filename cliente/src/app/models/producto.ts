export class Producto {
    _id?: Number;
    nombre: String;
    categoria: String;
    ubicacion: String;
    precio: String;
    
    constructor( nombre: String, categoria: String, ubicacion: String, precio: String){
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.precio = precio;
    }

}