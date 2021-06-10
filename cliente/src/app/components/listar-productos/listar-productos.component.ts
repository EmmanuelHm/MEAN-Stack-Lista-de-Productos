import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  listProductos: Producto[] = []

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.obtenerProductos()
  }

  obtenerProductos(){
    this.productoService.getProductos().subscribe(
      res => {
        console.log(res)
        this.listProductos = res
      },
      err => console.log(err)
    )
  }

  eliminarProduto(id: any){
    this.productoService.eliminarProducto(id).subscribe(
      res => {
        this.toastr.success('El producto ha sido eliminado con exito', 'Producto Eliminado')
        this.obtenerProductos()
      },
      err => {
        console.log(err)
        this.toastr.error('Hubo un error al eliminar este produto', 'No Eliminado')
      }
    )
  }

}
