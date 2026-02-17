import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimTextPipe } from './custom-pipe/trim-text-pipe';
import { HighlightText } from './directives/highlight-text';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TrimTextPipe, HighlightText],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Angular Tutorial";
  name = "Bhaskar Govil"
  hello = "hello"
  color = ''
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
  state = true;
  list = [1, 2, 3, 4];
  
  studentsData = [
    {
      name:"bhaskar",
      age: "20",
      dob: "14 dec 2004"
    },
    {
      name:"ryansh",
      age: "20",
      dob: "25 july 2004"
    }
  ]

  block = 4;
  updateBlock() {
    this.block++;
    this.block %= 4;
  }
  updateColor(color:string) {
    this.color = color;
  }
}