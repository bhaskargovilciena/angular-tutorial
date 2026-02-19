import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-favorite-color',
  imports: [ReactiveFormsModule],
  templateUrl: './favorite-color.html',
  styleUrl: './favorite-color.css',
})
export class FavoriteColor {
  favoriteColorControl = new FormControl('')
}
