import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { HeaderComponent } from '../header/header.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    AddProductComponent,
    ProductDetailComponent,
    ProductListComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    AddProductComponent,
    ProductDetailComponent,
    ProductListComponent
  ]
})
export class CRUDProductsModule { }
