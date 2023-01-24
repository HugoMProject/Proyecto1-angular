import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/shared/products.service'; 
import { ActivatedRoute } from '@angular/router';
import { productList } from 'src/app/models/productList.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  loginForm = new FormGroup({
    //middleware del formulario del login
    //validamos los campos
    id : new FormControl('',Validators.required),
    productName: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    stock: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    img: new FormControl('',Validators.required)
  })


  constructor(public _productsService:ProductsService, public activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  editProduct(form:productList){
    this.activatedRoute.params.subscribe(params => {
      const id: any = params['id'] || null;

      this._productsService.updateProduct(id,form)
    });
  }
  //crear la funcion para que nos devuelva los datos po defecto del id seleccionado, desde la url
  ReturnList(){
    this.router.navigate(['/list'])
  }
}
