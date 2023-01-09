import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse  } from '@angular/common/http';
import { productList } from '../models/productList.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  urlAPI = 'http://localhost:3000/api/';
  constructor(private http:HttpClient) {}

  getAllProducts():Observable<productList[]>{
  return this.http.get<productList[]>(`${this.urlAPI}product`)
  };
  getOneProduct(id:string):Observable<productList[]>{
  return this.http.get<productList[]>(`${this.urlAPI}getone/product/${id}`)
  };
  createProduct(){};
  updateProduct(id:string){};

  deleteOneProduct(id:string):Observable<productList>{
    return this.http.delete<productList>(`${this.urlAPI}delete/product/${id}`)
  };
   
}
