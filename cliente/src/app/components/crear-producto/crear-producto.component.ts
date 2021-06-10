import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  public productoForm: FormGroup
  public titulo = "Crear Producto";
  public id: String | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private productoService: ProductoService,
    private aRouter: ActivatedRoute
  ) {

    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.esEditar()
  }

  agregarProducto(){
    // console.log(this.productoForm)
    // console.log(this.productoForm.get('producto')?.value)
    
    const producto: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    if (this.id !== null){
      // editamos Producto

      this.productoService.editarProducto(this.id, producto).subscribe(
        res => {
          this.toastr.info('El Producto fue Actualizado con exito', 'Producto Actualizado');
          this.router.navigate(['/'])
        },
        error => {
          console.log(error)
          this.productoForm.reset()
        }
      )
    }
    else{
      // agregamos producto
      console.log(producto) 
      this.productoService.guardarProducto(producto).subscribe(
        res => {
          this.toastr.success('El Producto fue Registrado con exito', 'Producto Resgistrado');
          this.router.navigate(['/'])
        },
        error => {
          console.log(error)
          this.productoForm.reset()
        }
      )
    }

    
  }

  esEditar(){
    if(this.id !== null){
      this.titulo = "Editar Producto"
      this.productoService.obtenerProducto(this.id).subscribe(
        res => {
          this.productoForm.setValue({
            producto: res.nombre,
            categoria: res.categoria,
            ubicacion: res.ubicacion,
            precio: res.precio
          })
        }
      )
    }
  }

}
