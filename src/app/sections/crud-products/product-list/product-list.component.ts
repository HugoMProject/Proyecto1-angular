import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/shared/products.service';
import { productList } from 'src/app/models/productList.interface';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //Definimos las dos propiedades que se inicializan los titulos y las filas de la componente:
//Guardamos en un atributo la referencia del método keys del objeto 'Object', para usarlo luego en la plantilla
  products?:productList[];


  constructor(public _productsService:ProductsService) { }

  ngOnInit(){
    this.getAll();
  };
  getAll(){
    this._productsService.getAllProducts().subscribe(data=>{
      this.products = data
    })
  }
  deleteOneProduct(id:any){
    var resultado = window.confirm('Estas seguro que quieres eliminar el producto?...');
    if (resultado === true) {
      this._productsService.deleteOneProduct(id);
      console.log(this._productsService.deleteOneProduct(id))
    }
      
    }

}
