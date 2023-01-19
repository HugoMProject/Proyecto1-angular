import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
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

  constructor(private UserApi:AuthService) { }

  ngOnInit(): void {}
  //controlador del login
  onLogin(form:any){
//obtenemos los datos del formulario de login y seteamos el token como cookie
    this.UserApi.loginByEmail(form).subscribe((data)=>{
      this.UserApi.setToken(data.token)
      })
  }
}
