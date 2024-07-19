import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskObj: any = {
    title: "",
    des: "",
    priority: "",
    uid: "1"
  };

  http = inject(HttpClient);

  constructor(private router: Router) {}

  onSubmit() {
    this.http.post("https://coding-ninjas.onrender.com/task/upload_task", this.taskObj,{ withCredentials: true }).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/']); 
    });
  }
}
