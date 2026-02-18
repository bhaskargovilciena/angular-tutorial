import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {
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
