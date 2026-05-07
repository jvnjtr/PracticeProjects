import { Component, EventEmitter, input, Input, Output } from '@angular/core';
//  type User={
//   name:string,
//   avatar:string,
//   userid:number,
//  }
interface User{
  name:string,
  avatar:string,
  userid:number
}
@Component({
  selector: 'app-user-component',
  imports: [],
  templateUrl: './user-component.html',
  styleUrl: './user-component.scss',
})
export class UserComponent {
  // @Input({required: true}) avatar!:any;
  // @Input({required: true}) name!:any;
  avatar=input.required<string>();//using signal as input from parent component
  name=input.required<string>();
  @Input({required: true}) userid!:any;

  @Output() selectedUserFromUserComponent = new EventEmitter<object>();
  // @Output() selectedUserFromUserComponent = new EventEmitter<User>();  custom type


  selectUser(){
    console.log(this.name());
    console.log(this.avatar());
    console.log(this.userid);
    let obj={
      name:this.name(),
      avatar:this.avatar(),
      userid:this.userid
    }
    this.selectedUserFromUserComponent.emit(obj);
  }
  get imagePath(){
    return `assets/users/${this.avatar()}`;
  }
}
