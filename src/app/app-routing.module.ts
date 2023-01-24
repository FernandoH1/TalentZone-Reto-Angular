import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {path: '', component:ListProductsComponent, pathMatch: 'full' },
  {path: 'registrar', component:RegisterProductComponent},
  {path: 'edit', component:EditProductComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
