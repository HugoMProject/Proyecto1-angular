import { Component,forwardRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productList } from 'src/app/models/productList.interface';
import { ProductsService } from 'src/app/shared/products.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
 interface Control_Value_Accessor {
  writeValue(obj: any): void
  registerOnChange(fn: any): void
  registerOnTouched(fn: any): void
  setDisabledState(isDisabled: boolean): void
};

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductDetailComponent),
      multi: true,
    },
  ],
})
export class ProductDetailComponent implements OnInit{
  
  _product:any=[];

  constructor(public _productsService:ProductsService, public activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.seeMoreProduct();
  }
  seeMoreProduct(){
    let productOne:any = [];
    //obtenemos de la url el parametro del id y lo pasamos como argumento en la funcion
    //para poder traer loss datos de ese id.
    this.activatedRoute.params.subscribe(params => {
      const id: string = params['id'] || null;
      this._productsService.getOneProduct(id).subscribe(data=>{
        // desestructuramos los datos que vienen desde el backend, para poder iterarlo en el html
        const {productName, price, description,stock} = data;
        productOne.push({productName, price, description,stock});
        return  this._product= productOne
        
      })
    });
  }
  
  regresar(){
    this.router.navigate(['list'])
  }

  editProduct(form:productList){
    this.activatedRoute.params.subscribe(params => {
      const id: any = params['id'] || null;

      this._productsService.updateProduct(id,form)
    });
  }
}
