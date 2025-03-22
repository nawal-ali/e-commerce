import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,  
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
  
    if (this.email && this.password) {
      if (this.validateEmail(this.email)) {
        console.log('Login Successful:', this.email);
     
        this.router.navigate(['/home']);
      } else {
        console.log('Invalid email format');
      }
    } else {
      console.log('Please fill in all fields');
    }
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
}
