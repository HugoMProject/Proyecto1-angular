import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './sections/crud-products/add-product/add-product.component';
import { ProductDetailComponent } from './sections/crud-products/product-detail/product-detail.component';
import { ProductListComponent } from './sections/crud-products/product-list/product-list.component';
import { FormLoginComponent } from './sections/form-login/form-login.component';
//declaramos la rutas de cada co ponente
const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login', component: FormLoginComponent},
  {path:'list', component: ProductListComponent},
  {path:'add',component: AddProductComponent},
  {path:'product-detail',component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
