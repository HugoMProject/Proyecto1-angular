import { Component, OnInit } from '@angular/core';
import { productList } from 'src/app/models/productList.interface';
import { ProductsService } from 'src/app/shared/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerProduct?:productList[];
  constructor(private _productList:ProductsService, private router:Router) { }

  ngOnInit(): void { }
  seccionOff(){
    //alertas antes de cerrar seccion
    var result = window.confirm('Estas seguro que quieres salir?...');
    if (result === true) {
        window.alert('Okay, si estas seguro!... hasta Luego.');
    }
  }

  showProducts(){
    this.router.navigate(['list'])
  }
  upDate(){
    this.router.navigate(['add'])
  }

  deleteAllProducts(){
    //alertas antes de elimimnar
        var resultado = window.confirm('Estas seguro que quieres eliminar todo los productos?...');
    if (resultado === true) {
        window.alert('Okay, si estas seguro eliminamos todos los productos...');
    }
   
  }

}
