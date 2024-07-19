import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj: any = {
    email: "",
    Password: ""
  };

  http = inject(HttpClient);

  constructor(private router: Router) {}

  onLogIn() {
    this.http.post("https://coding-ninjas.onrender.com/users/login", this.userObj, { withCredentials: true }).subscribe((res: any) => {
      console.log(res + "done hogya bhai");
      this.router.navigate(['/']); 
    });
  }
  
}
