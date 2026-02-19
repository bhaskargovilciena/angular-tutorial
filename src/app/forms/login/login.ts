import { Component, computed, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { UserService } from '../../services/user-service';

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

  // when this form is loaded then prefilled user details are fetched from the service and displayed for the user to update.
  loginModel = signal<LoginInterface>({
    username:'',
    password:''
  })

  loginForm = form(this.loginModel)

  private userService = inject(UserService)

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    const userData = this.userService.getUserProfile()
    this.loginModel.set(userData);
    console.log("profile set updated");
    
  }
}
