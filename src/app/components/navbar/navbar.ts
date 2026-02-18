import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CustomService } from '../../services/custom-service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private router = inject(Router)
  private customService = inject(CustomService)

  // calling service from a component
  handleEvent(event:Event) {
    event.preventDefault();
    this.customService.addItem("123")
    this.router.navigate(['/login'])
  }
}
