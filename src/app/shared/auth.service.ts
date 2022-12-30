import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse  } from '@angular/common/http';
import { loginInterfece } from '../models/login.interfece';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = 'http://localhost:3000/api/'
  constructor(private http:HttpClient) { }
//funcion para auntenticar al usario
  loginByEmail(form:loginInterfece):Observable<loginInterfece>{
    let direction = this.url + 'login'
    return this.http.post<loginInterfece>(direction,form)
  }
}
