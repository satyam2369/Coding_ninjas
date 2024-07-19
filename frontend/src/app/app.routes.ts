import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { TaskFormComponent } from './task-form/task-form.component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    {path: '', component: AllTasksComponent},
    {path:'addtask', component: TaskFormComponent}

];
