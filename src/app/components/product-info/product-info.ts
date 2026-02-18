import { Component, inject, Signal } from '@angular/core';
import { ROUTER_OUTLET_DATA } from '@angular/router';

@Component({
  selector: 'app-product-info',
  imports: [],
  templateUrl: './product-info.html',
  styleUrl: './product-info.css',
})
export class ProductInfo {
  outletData = inject(ROUTER_OUTLET_DATA) as Signal<{layout:string}> // catching the data passed as input to the router outlet as a signal
  
}
