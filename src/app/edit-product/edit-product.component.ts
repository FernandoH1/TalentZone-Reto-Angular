import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id:number;
  product:Product = new Product();
  constructor(private productService:ProductService, private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(dato => {
      this.product = dato;
    }, error => console.log(error));
  }

  returnToProductList(){
    this.router.navigate(['/product']);
    // swal('Producto actualizado',`El Producto ${this.product.name} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.productService.editProduct(this.id,this.product).subscribe(dato => {
      this.returnToProductList();
    },error => console.log(error))
  }
}
