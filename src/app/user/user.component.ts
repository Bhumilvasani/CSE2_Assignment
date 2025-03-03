import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username: string = 'JohnDoe';  // Example username
  email: string = 'john.doe@example.com';  // Example email

  logout() {
    // Handle logout logic here
    console.log("User logged out");
  }

}
