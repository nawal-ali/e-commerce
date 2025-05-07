import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  standalone: false,
  templateUrl: './forgetpassword.html',
  styleUrls: ['./forgetpassword.css']
})
export class ForgetPasswordComponent {
  email: string = '';

  onSubmit(): void {
    if (!this.email) {
      alert('Please enter your email.');
      return;
    }

    alert(`Reset link sent to ${this.email}`);
  }
}
