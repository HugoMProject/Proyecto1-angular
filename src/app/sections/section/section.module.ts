import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CRUDProductsModule } from '../crud-products/crud-products.module';
import { HeaderComponent } from '../header/header.component';
import { FormLoginComponent } from '../form-login/form-login.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    CRUDProductsModule,
    MaterialModule
  ],
  exports:[CRUDProductsModule,
  HeaderComponent,
FormLoginComponent]

})
export class SectionModule { }
