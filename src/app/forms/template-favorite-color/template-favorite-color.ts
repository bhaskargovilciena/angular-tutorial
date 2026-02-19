import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-favorite-color',
  imports: [FormsModule],
  templateUrl: './template-favorite-color.html',
  styleUrl: './template-favorite-color.css',
})
export class TemplateFavoriteColor {
  favoriteColor = signal('')
}
