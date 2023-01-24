import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './sections/crud-products/add-product/add-product.component';
import { EditProductComponent } from './sections/crud-products/edit-product/edit-product.component';
import { ProductDetailComponent } from './sections/crud-products/product-detail/product-detail.component';
import { ProductListComponent } from './sections/crud-products/product-list/product-list.component';
import { FormLoginComponent } from './sections/form-login/form-login.component';
// con el vigilante protegemos las rutas para los usuarios que no esten logeados
import { VigilanteGuard } from './shared/vigilante.guard';
//declaramos la rutas de cada componente
const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login', component: FormLoginComponent},
  {path:'list', component: ProductListComponent,canActivate:[VigilanteGuard]},
  {path:'add',component: AddProductComponent,canActivate:[VigilanteGuard]},
  {path:'product-detail/:id',component: ProductDetailComponent,canActivate:[VigilanteGuard]},
  {path:'edit/:id',component: EditProductComponent,canActivate:[VigilanteGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
