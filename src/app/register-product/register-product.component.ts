import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit{
  
  product:Product = new Product();

  constructor(private productService: ProductService, private router:Router){}

  ngOnInit(): void {
  }

  saveProduct(){
    this.productService.registerProduct(this.product).subscribe(data => {
      console.log(data);
      swal(
        'Producto Creado',
        'El Producto ha sido Creado con exito',
        'success'
      )
      this.returnListProduct();
    }, error => console.log(error));
  }

  returnListProduct(){
    this.router.navigate(['/product']);
  }

  onSubmit(){
    this.saveProduct();
  }

}
