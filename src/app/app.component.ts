import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root', 
  standalone:true,
  imports: [RouterOutlet,LoginComponent,RegisterComponent,ForgotpasswordComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment1';
}
