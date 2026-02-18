import {Routes} from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Login } from './components/login/login';
import { App } from './app';
import { inject } from '@angular/core';
import { CustomService } from './services/custom-service';
import { combineLatest } from 'rxjs';
import { Product } from './components/product/product';
import { ProductInfo } from './components/product-info/product-info';
import { ProductReviews } from './components/product-reviews/product-reviews';
export const routes: Routes = [
  // HomePage and LoginPage are both directly referenced in this config,
  // so their code is eagerly included in the same JavaScript bundle as this file.
  {
    path: '',
    component: App,
    title: 'Home Page'
  },
  {
    path: 'login', // static route
    component: Login,
    title: 'Login Page',
    providers: [CustomService, {provide: "ADMIN", useValue: 'admin\'s key'}] // injecting dependencies 
  },
  {
    path:'navbar',
    redirectTo: '/login',
    data: {
      analyticsId: '123' // passing some static data with the endpoint which can be used by the component.
    }
  },
  {
    path: 'counter-app',
    loadComponent: () => import('./components/counter-app/counter-app').then(component => component.CounterApp),
  },
  {
    path: 'dependency-injection-demo',
    loadComponent: async () => {
      const service = inject(CustomService)
      service.addItem("demo string")
      console.log(service.getItem());
      return import('./components/navbar/navbar').then(comp => comp.Navbar)
    },
  },
  // adding child routes
  {
    path:'product/:id',
    component: Product,
    children: [ // array of route object
      {
        path: 'info',
        component: ProductInfo
      },
      {
        path: 'reviews',
        component: ProductReviews
      }
    ]
  }
];