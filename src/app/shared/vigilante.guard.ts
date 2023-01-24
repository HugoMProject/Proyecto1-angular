import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {
Api_URL = 'http://localhost:3000';
  constructor(private cookieService:CookieService, private router:Router, private http:HttpClient, private _authService:AuthService){}
  //si no esta logeado lo mandamos al login
  redirection(flag:boolean){
    if(!flag){
        this.router.navigate(['login'])
    }
  }
  verifyToken(token:string):Observable<any>{
    const headers = new HttpHeaders()
      .append('X-Requested-With', 'XMLHttpRequest')
      .append('x-access-token', token);
    return this.http.get<boolean>(`${this.Api_URL}/protected-route`,{ headers:headers });
}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     const cookie = this.cookieService.get('token');
     //verificamos en el back end si el token es valido.
      this.verifyToken(cookie).subscribe(res=>{
       if(!res === false){
         this.redirection(res)
        }   
      });
      //verificamos que el token exista.
      const tokenVlidator = this.cookieService.check('token');
      this.redirection(tokenVlidator)
      //este return me bloqueara o me dejara pasar.
      return tokenVlidator;
  };
  
}
