import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserProfile() {
    return {
      username: "bhaskar",
      password: "bhaskar@1"
    }
  }
}
