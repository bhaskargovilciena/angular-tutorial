import { Component, inject, signal } from '@angular/core';
import { HttpServiceDemo } from '../../services/http-client';

@Component({
  selector: 'app-http-client-demo',
  imports: [],
  templateUrl: './http-client-demo.html',
  styleUrl: './http-client-demo.css',
})
export class HttpClientDemo {
  private httpService = inject(HttpServiceDemo)

  productData:any = signal("")

  ngOnInit() {
    this.httpService.getAllUsers().subscribe((productDataAPI) => {
      console.log(productDataAPI);
      this.productData.set(productDataAPI.products)
    })
  }
}
