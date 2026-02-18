import { Component, inject, Signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink, ROUTER_OUTLET_DATA } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterOutlet, RouterLink, RouterOutlet],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  
}
