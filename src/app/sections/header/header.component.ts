import { Component, OnInit } from '@angular/core';
import { productList } from 'src/app/models/productList.interface';
import { ProductsService } from 'src/app/shared/products.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerProduct?:productList[];
  constructor(private _productList:ProductsService, private router:Router, private _authservice:AuthService) { }

  ngOnInit(): void { }
  seccionOff(){
    //alertas antes de cerrar seccion
    var result = window.confirm('Estas seguro que quieres salir?...');
    if (result === true) {
      //si acepta usamos la funcion para eliminar la cookie de session y lo reedirigimos al 
      //la vista de login 
      this._authservice.logOut()
        this.router.navigate(['login'])
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
