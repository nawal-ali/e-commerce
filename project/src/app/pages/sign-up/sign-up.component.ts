import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
name: string = '';
lastName: string = '';
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  agreed: boolean = false;

  constructor(private router: Router, private userService:UserService) {}

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
    this.router.navigateByUrl(" ");

    const signUpBody = {
      firstName: this.name,
      lastNaame: this.lastName,
      email: this.email,
      password: this.password
  };

  this.userService.signUp(signUpBody).subscribe(res => {
      console.log('Success from sidn-up:', res);
      // localStorage.setItem('token', res.user.token);
      localStorage.setItem('id', res._id);
      this.showAlert('Sign up successful!', 'success');
      this.userService.isLoged = true;
      this.router.navigateByUrl('');
      this.userService.logeduserId = res._id
      console.log("this is id "+this.userService.logeduserId);
    },
    (err) => {
      console.error('Sign up failed:', err);
      this.showAlert(err.error.message || 'Sign up failed', 'danger');
    }
  );
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
    setTimeout(() => alert.remove(),3000);
}

  ngOnInit(): void {
    // إخفاء الفوتر والعناصر التانية وقت الدخول على صفحة اللوج إن
    const footer = document.querySelector('app-footer') as HTMLElement;
    const header = document.querySelector('app-navbar') as HTMLElement;
    if (footer) footer.style.display = 'none';
    if (header) header.style.display = 'none';
  }
    ngOnDestroy(): void {
        const footer = document.querySelector('app-footer') as HTMLElement;
        if (footer) footer.style.display = 'block';
        const header = document.querySelector('app-navbar') as HTMLElement;
        if (header) header.style.display = 'block';
}

}
