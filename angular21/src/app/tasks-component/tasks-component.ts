import { Component, Input, OnInit, SimpleChanges,OnChanges } from '@angular/core';
import {JsonPipe} from '@angular/common';
import {dummyTasks} from '../dummyTasks';
interface User{
  name:string,
  avatar:string,
  userid:string,
  title:string,
  summary:string
}
@Component({
  selector: 'app-tasks-component',
  imports: [JsonPipe],
  templateUrl: './tasks-component.html',
  styleUrl: './tasks-component.scss',
})
export class TasksComponent implements OnInit,OnChanges {
  USER_TASK:any=dummyTasks;
  @Input({required:true}) selectedUserFromParent!:User;
  userInformation!:User;
  userId!:any;
  selectedUserTask!:User[];
  ngOnInit(): void {
    // this.selectedUserTask='';
     //this.userInformation=this.selectedUserFromParent;
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log(this.selectedUserFromParent)
    this.userId=this.selectedUserFromParent.userid;
    //console.log('userId:'+this.userId)
    this.selectedUserTask=this.USER_TASK.filter((task:any)=>task.userId===this.userId)!;
    //console.log(this.selectedUserTask)
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['selectedUserFromParent']) {

      this.userId = this.selectedUserFromParent.userid;

      console.log('userId:', this.userId);

      this.selectedUserTask = this.USER_TASK.filter(
        (task:any) => task.userId === this.userId
      );

      console.log(this.selectedUserTask);
    }
    
  }
  // get selectedUserInformation(){
  //   return this.USER_TASK.filter((user:any)=>user.id===this.selectedUserFromParent);
  // }
}
