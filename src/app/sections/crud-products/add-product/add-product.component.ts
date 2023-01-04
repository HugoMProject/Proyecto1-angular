import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/products.service'; 
import { productList } from 'src/app/models/productList.interface';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

   
      //CREATE 
  create(){
    var resultado = window.confirm('Estas seguro que quieres crear este producto?...');
    if (resultado === true) {
      window.alert('producto creado exitosamente');
      this.guardar();
      }
  };
  guardar(){
    console.log('guardado exitosamente')
  };

}
