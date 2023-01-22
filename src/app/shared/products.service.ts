import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse  } from '@angular/common/http';
import { productList } from '../models/productList.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  urlAPI = 'http://localhost:5000/api/';
  constructor(private http:HttpClient) {}

  getAllProducts():Observable<productList[]>{
  return this.http.get<productList[]>(`${this.urlAPI}product`)
  };
  getOneProduct(id:any):Observable<any>{
  return this.http.get<any>(`${this.urlAPI}getone/product/${id}`)
  };
  createProduct(form:productList):Observable<productList>{
    return this.http.post<productList>(`${this.urlAPI}create/product`,form)
  };
  updateProduct(form:productList):Observable<productList>{
    return this.http.put<productList>(`${this.urlAPI}update/product/${form.id}`,form)
  };

  deleteOneProduct(id:string):Observable<productList>{
    return this.http.delete<productList>(`${this.urlAPI}delete/product/${id}`)
  };
  deleteAllProduct():Observable<productList>{
    return this.http.delete<productList>(`${this.urlAPI}deleteAll/product`)
  };
   
 showMore(id:string){
  let showdata = [];
  this.getOneProduct(id).subscribe(data=>{
    showdata = data;
    return showdata;
  })
 }

}
