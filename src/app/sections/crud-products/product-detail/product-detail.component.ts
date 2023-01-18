import { Component, OnInit } from '@angular/core';
import { productList } from 'src/app/models/productList.interface';
import { ProductsService } from 'src/app/shared/products.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product?:productList[];
  constructor(public _productsService:ProductsService) { }

  ngOnInit(): void {
  }
  seeMoreProduct(id:any){
    this._productsService.getOneProduct(id).subscribe(data=>{
      this.product = data
    })
  }
 
}
