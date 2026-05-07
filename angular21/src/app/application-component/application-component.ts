import { Component } from '@angular/core';
import { HeaderComponent } from "../header-component/header-component";
import { UserComponent } from "../user-component/user-component";
import { DUMMY_USERS } from "../dummyUsers";
import { CommonModule } from "@angular/common";
import { TasksComponent } from "../tasks-component/tasks-component";
@Component({
  selector: 'app-application-component',
  imports: [HeaderComponent, UserComponent, CommonModule, TasksComponent],
  templateUrl: './application-component.html',
  styleUrl: './application-component.scss',
})
export class ApplicationComponent {
  users: any= DUMMY_USERS;
  selectedUserFromChild!:any;
  constructor() {
    console.log(this.users);
  }
  onUserSelected(userId: any) {
    console.log('Selected user ID:', userId);
    this.selectedUserFromChild=userId;
    return userId;
  }
  get selectedUserGetter(){
    // console.log(this.selectedUserFromChild);
    return this.users.find((users:any)=>this.users.id===this.selectedUserFromChild.userid)!;
  }
}
