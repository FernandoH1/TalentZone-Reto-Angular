import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{
 
  products: Product[];
  constructor(private productService: ProductService,private router:Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.productService.getListProducts().subscribe(product => {
      this.products = product;
    })
  }

  editProduct(id:number){
    this.router.navigate(['edit',id]);
  }

  deleteProduct(id:number){
    swal({
        title: '¿Estas seguro?',
        text: "Confirma si deseas eliminar el Producto",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si , elimínalo',
        cancelButtonText: 'No, cancelar',
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger',
        buttonsStyling: true
      }).then((result) => {
        if(result.value){
          this.productService.deleteProduct(id).subscribe(product => 
            {
              console.log(product);
              this.getProducts();
              swal(
                    'Producto eliminado',
                    'El Producto ha sido eliminado con exito',
                    'success'
                  )
            });
          }
  })
}

}
