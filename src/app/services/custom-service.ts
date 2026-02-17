import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // this means that this service can only be placed once in the application and any component can call it
})
export class CustomService {
  data:string[] = []

  getItem() :string[] {
    return [...this.data]
  }

  addItem(value:string) :void {
    this.data.push(value)
  }
}
