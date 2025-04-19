import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  rememberMe: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // إخفاء الفوتر والعناصر التانية وقت الدخول على صفحة اللوج إن
    const footer = document.querySelector('app-footer') as HTMLElement;
    const header = document.querySelector('app-header') as HTMLElement;
    if (footer) footer.style.display = 'none';
    if (header) header.style.display = 'none';
    
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (!this.email || !this.password) {
      this.showAlert('Please fill in all fields.', 'warning');
      return;
    }

    if (!this.validateEmail(this.email)) {
      this.showAlert('Invalid email format.', 'danger');
      return;
    }

    // تسجيل دخول ناجح
    this.showAlert('Login successful!', 'success');

    // لو remember me متعلم عليها خزِّن البيانات
    if (this.rememberMe) {
      sessionStorage.setItem('userEmail', this.email);
    }

    // التنقل للصفحة الرئيسية
    this.router.navigate(['/home']);
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
    alert.innerHTML = `
      <strong>${message}</strong>
    `;
    document.body.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }

  loginWithGoogle(): void {
    this.showAlert('Login with Google is not yet implemented.', 'warning');
  }

  loginWithFacebook(): void {
    this.showAlert('Login with Facebook is not yet implemented.', 'warning');
  }
}