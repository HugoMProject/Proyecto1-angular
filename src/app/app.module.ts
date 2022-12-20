import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionModule } from './sections/section/section.module';

import { ProductsService } from './shared/products.service';
import { AuthService } from './shared/auth.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
