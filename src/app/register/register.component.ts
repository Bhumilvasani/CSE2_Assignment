import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  onRegister() {
    // Handle the registration logic here
    console.log("Registration form submitted");
  }

}
