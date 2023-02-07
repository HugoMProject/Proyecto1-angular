import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
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
  dataProduct:productList={
    id :'',
    productName:'',
    price:'',
    stock:'',
    description:'',
    img:''
  }
  productForm = new FormGroup({
    //middleware del formulario del edit product
    //validamos los campos
    id : new FormControl(''),
    productName: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl('')
  })


  constructor(public _productsService:ProductsService, public activatedRoute:ActivatedRoute, private router:Router) { }
  
  ngOnInit(): void {
      let productOne:any = [];
      this.activatedRoute.params.subscribe(params => {
        const Id: any = params['id'] || null;
        this._productsService.getOneProduct(Id).subscribe(data=>{
          this.dataProduct= data;
        // desestructuramos los datos que vienen desde el backend, para poder iterarlo en el html
          const {productName, price, description,stock,img,id} = data;
      //setemanos en el controlar los datos desestructurados para poder enviarlos al back end los datos modificados
          this.productForm.setValue({
            productName, price, description,stock,img,id
          })
        });
  
      })

  }

  editProduct(form:any){
    this.activatedRoute.params.subscribe(params => {
      const id: string = params['id'] || null;
      this._productsService.updateProduct(id,form).subscribe();
      alert('El producto ha sido modificado con exito!!! Si desea salir precione en el boton regresar')
    });

  }
 
  //crear la funcion para que nos devuelva los datos po defecto del id seleccionado, desde la url
  ReturnList(){
    this.router.navigate(['/list'])
  }
}
