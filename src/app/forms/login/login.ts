import { Component, computed, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

interface LoginInterface {
  username:string,
  password:string
}

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginModel = signal<LoginInterface>({
    username:'',
    password:''
  })

  loginForm = form(this.loginModel)
}
