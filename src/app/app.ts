import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Angular Tutorial";
  name = "Bhaskar Govil"
  hello = "hello"
  counter = 0
  handleDecrementClick() {
    this.counter--;
  }
  handleIncrementClick() {
    this.counter++;
  }
  handleResetClick() {
    this.counter=0;
  }
}
