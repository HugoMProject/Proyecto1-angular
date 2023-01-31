import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse  } from '@angular/common/http';
import { loginInterfece } from '../models/login.interfece';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
token?:any;
  url:string = 'https://ecommerce-node.up.railway.app/api/'
  constructor(private http:HttpClient, private cookies:CookieService, private router:Router) { }
  
//funcion para auntenticar al usario
  // Función para autenticar al usuario
  loginByEmail(form:loginInterfece): Observable<any> {
    const direction = this.url + 'login/auth';
    return this.http.post<any>(direction, form);
  }
  // Establecer cookie
  setToken(Token:any) {
    this.token = Token;
                    // nombre, dato aguardar , expiracion 24hs
     this.cookies.set("token", Token , 1,'/');
    return this.router.navigate(['list'])
  }
  // Obtener cookie
  getToken() {
    return this.cookies.get("token")
  }
  logOut(){

    this.cookies.delete("token");
    window.location.reload();    
      }
  }

