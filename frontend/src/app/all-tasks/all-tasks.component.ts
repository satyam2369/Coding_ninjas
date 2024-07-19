import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent {
  allTasks:any[] = []
  user: any;


  constructor(private http: HttpClient){
      this.getAllTask();
      this.checkLogin();
  }

  getAllTask(){
    this.http.get("http://localhost:4000/task/allTasks",{ withCredentials: true }).subscribe((res:any) => {
      this.allTasks = res;
      console.log(res);
    })
  }

  checkLogin() {
    this.http.get("http://localhost:4000/users/checkLogin",{ withCredentials: true }).subscribe((res: any) => {
      this.user = res;
      console.log("ye user");
      console.log(res);

    });
  }
    


}




