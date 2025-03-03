import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  // This method will handle the form submission
  onSubmit() {
    console.log('Logging in with:', this.username, this.password);
  }

}