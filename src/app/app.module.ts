import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { SectionModule } from './sections/section/section.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductsService } from './shared/products.service';
import { AuthService } from './shared/auth.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SectionModule
  ],
  providers: [
    AuthService,
    ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
