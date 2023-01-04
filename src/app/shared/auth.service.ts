import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse  } from '@angular/common/http';
import { loginInterfece } from '../models/login.interfece';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
token?:string;
  url:string = 'http://localhost:3000/api/'
  constructor(private http:HttpClient, private cookies:CookieService) { }
  
//funcion para auntenticar al usario
  loginByEmail(form:any):Observable<loginInterfece>{
    let direction = this.url + 'login'
    return this.http.post<loginInterfece>(direction,form)
  }

  //set cookie
  setToken(token: any) {
    this.token = token
    this.cookies.set("token",token);
  }
  getToken() {
    return this.cookies.get("token");
  }



  
  login(email: string, password: string) {
    // Envía una solicitud de autenticación al servidor
    this.http.post<{ token: string }>('login', { email, password }).subscribe(response => {
      // Almacena el token en una cookie
      this.cookies.set('token', response.token);
      // Utiliza el token para autenticar futuras solicitudes
      this.http.get('/api/protected').subscribe(response => {
        console.log(response);
      });
    });
  }


}