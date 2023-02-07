import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/products.service';
import { productList } from 'src/app/models/productList.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products?:productList[];

  constructor(public _productsService:ProductsService, private router:Router) { }
    //CRUD PRODUCTOS
  ngOnInit(){
    this.getAll();
  };
  //GET ALL
  getAll(){
    this._productsService.getAllProducts().subscribe(data=>{
      this.products = data
      // window.location.reload();
    })
    
  };
  //CREATE 
  
  // -------------------esta funcion se encuentra en el archivo de add-component.ts.....---------------------

  //UPDATE
  udateProduct(id:any){
    var resultado = window.confirm('Estas seguro que quieres editar este producto?...');
    if (resultado === true) {
      window.alert('producto editado')
      }
  };
  //DELETE ONE
  deleteOneProduct(id:any){
    var resultado = window.confirm('Estas seguro que quieres eliminar este producto?...');
    if (resultado === true) {
      this._productsService.deleteOneProduct(id).subscribe(()=>{
        this.getAll();
      })
      
    }else{(error:any)=>{
      console.log(error);
    }}
  };
  //ver detalle de producto
  seeMore(id:any){
    // console.log(`Este es el id del producto seleccionado ===> ${id}`);
    this.router.navigate([`product-detail/${id}`]);
 
  }
 
}
