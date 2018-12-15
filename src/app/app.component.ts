import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping List';

  constructor(private authService: AuthService){
    
    this.authService.login();
    
  }

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }
}
