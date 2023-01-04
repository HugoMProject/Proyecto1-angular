import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { loginInterfece } from 'src/app/models/login.interfece';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  hide = true
  loginForm = new FormGroup({
    //middleware del formulario del login
    //validamos los campos
    email : new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  constructor(private UserApi:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  //controlador del login
  onLogin(form:any){

    this.UserApi.loginByEmail(form).subscribe(data => {
      
      console.log(this.UserApi.getToken())
      // this.UserApi.setToken(data.token);
      // this.router.navigate(['/list']);
    });
  }
}
