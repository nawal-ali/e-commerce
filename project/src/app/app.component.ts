import { Component } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  constructor(private UserService:UserService){}
  ngOnInit(){
    // let token = localStorage.getItem('token')
    let id = localStorage.getItem('id')
    if(id) this.UserService.isLoged = true
  }
}
