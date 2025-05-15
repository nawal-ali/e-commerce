import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  rememberMe: boolean = false;

  loginBody={
    email:this.email,
    password:this.password
  }
  constructor(private router: Router,private userService: UserService) {
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

  const loginBody = {
    email: this.email,
    password: this.password
  };

  this.userService.login(loginBody).subscribe(res => {
      console.log('Success from login:', res);
      // localStorage.setItem('token', res.user.token);
      localStorage.setItem('id', res.user.id); // Assuming token is in res.token
      this.showAlert('Login successful!', 'success');

      // if (this.rememberMe) {
      //   sessionStorage.setItem('userEmail', this.email);
      // }
      this.userService.isLoged = true;
      this.router.navigateByUrl('');
      this.userService.logeduserId = res.user.id
      console.log("this is id "+this.userService.logeduserId);
    },
    (err) => {
      console.error('Login failed:', err);
      this.showAlert(err.error.message || 'Login failed', 'danger');
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
