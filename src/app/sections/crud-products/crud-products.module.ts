import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    AddProductComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AddProductComponent,
    ProductDetailComponent,
    ProductListComponent
  ]
})
export class CRUDProductsModule { }
