import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  agreed: boolean = false;

  constructor(private router: Router) {}

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (!this.name || !this.email || !this.password) {
      this.showAlert('Please fill in all fields.', 'warning');
      return;
    }

    if (!this.validateEmail(this.email)) {
      this.showAlert('Invalid email format.', 'danger');
      return;
    }

    if (!this.agreed) {
      this.showAlert('You must agree to the terms.', 'warning');
      return;
    }

    this.showAlert('Account created successfully!', 'success');
    this.router.navigate(['/login']);
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  showAlert(message: string, type: 'success' | 'danger' | 'warning') {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} position-fixed top-0 start-50 translate-middle-x mt-3 shadow`;
    alert.style.zIndex = '9999';
    alert.style.minWidth = '300px';
    alert.innerHTML = `<strong>${message}</strong>`;
    document.body.appendChild(alert);
    setTimeout(() => alert.remove(), 3000);
  }
}
