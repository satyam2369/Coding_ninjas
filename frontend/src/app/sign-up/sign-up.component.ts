import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  userObj: any = {
    name: "",
    email: "",
    Password: ""
  };

  http = inject(HttpClient);

  constructor(private router: Router) {}

  onSignUp() {
    this.http.post("https://coding-ninjas.onrender.com/users/createAccount", this.userObj,{ withCredentials: true }).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/login']); 
    });
  }
}
