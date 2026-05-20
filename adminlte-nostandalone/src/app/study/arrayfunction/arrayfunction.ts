import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-arrayfunction',
  standalone: false,
  templateUrl: './arrayfunction.html',
  styleUrl: './arrayfunction.css',
})
export class Arrayfunction {
  users=signal([
    {id:1,name:'John',age:30},
    {id:2,name:'Jane',age:25},
    {id:3,name:'Bob',age:35},
  ]);
  names:any[]=['John','Jane','Bob'];
  newUser:any;
  nameUser:any;
  mapUserData!:any[];
  findUser(){
    this.newUser=this.users().find(user=>user.id===4);
    console.log(this.newUser);
    this.findByName();
  }
  findByName(){
    this.nameUser=this.names.find(name=>name==='Jane');
    console.log(this.nameUser);
  }
  mapUser(){
      this.mapUserData=this.users().map(user=>({
         'name':'Mr. ' + user.name,
         'age':user.age+10,
      }))
     }
}
