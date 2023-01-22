import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productList } from 'src/app/models/productList.interface';
import { ProductsService } from 'src/app/shared/products.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  oneProduct? = {
    productName:'',
    price:'',
    description:'',
    stock:'',
};
  constructor(public _productsService:ProductsService, public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.seeMoreProduct();
  }
  seeMoreProduct(){
    //obtenemos de la url el parametro del id y lo pasamos como argumento en la funcion
    //para poder traer loss datos de ese id.
    this.activatedRoute.params.subscribe(params => {
      const id: number = params['id'] || null;
      console.log(id)
      this._productsService.getOneProduct(id).subscribe(data=>{
        this.oneProduct = data;
        console.log(this.oneProduct)
      })
    });
  }
 
}
