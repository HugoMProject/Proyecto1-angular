import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/shared/products.service'; 
import { productList } from 'src/app/models/productList.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
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

  constructor(public router:Router, private _productService:ProductsService) { }

  ngOnInit(): void {}

   
      //CREATE 
  create(form:any){
    var resultado = window.confirm('Estas seguro que quieres crear este producto?...');
    if (resultado === true) {
      this._productService.createProduct(form).subscribe( res => {console.log(res)}, err=> console.log(err));
      window.location.reload()
      window.alert('producto creado exitosamente');
      }
  };

  ReturnList(){
    this.router.navigate(['/list'])
  }
}
