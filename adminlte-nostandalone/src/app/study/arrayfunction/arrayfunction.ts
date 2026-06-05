import { Component, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../Services/auth-service';
import * as CryptoJS from "crypto-js";
interface User {
  name: string,
  age: number
}
@Component({
  selector: 'app-arrayfunction',
  standalone: false,
  templateUrl: './arrayfunction.html',
  styleUrl: './arrayfunction.css',
})
export class Arrayfunction implements OnInit {
  constructor(private actRouter: ActivatedRoute, private auth: AuthService) { }
  ngOnInit() {
    //  let data=this.actRouter.queryParams.subscribe(param=>{
    //   let data=param['id'];
    //   let decrypt=this.auth.decryptData(data);
    //   const decrypted = JSON.parse(decrypt.toString(CryptoJS.enc.Utf8));
    //   console.log(decrypted);
    //  })
    let data = this.actRouter.snapshot.paramMap.get('id');
    if (data) {
      let dec = this.auth.decryptData(data);
      let arrayParam = dec.split(':');

      console.log(arrayParam)
    }


  }
  users = signal([
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
  ]);
  names: any[] = ['John', 'Jane', 'Bob'];
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  newUser: any;
  nameUser: any;
  mapUserData!: any[];
  Newusers: User[] = [
    { name: "A", age: 20 },
    { name: "B", age: 25 },
    { name: "C", age: 20 }
  ];

  findUser() {
    this.newUser = this.users().find(user => user.id === 4);
    console.log(this.newUser);
    this.findByName();
  }
  findByName() {
    this.nameUser = this.names.find(name => name === 'Jane');
    console.log(this.nameUser);
  }
  mapUser() {
    this.mapUserData = this.users().map(user => ({
      'name': 'Mr. ' + user.name,
      'age': user.age + 10,
    }))
  };
  fileterEven() {
    let res = this.numbers.filter(num => num % 2 == 0);
    console.log(res);
    let newRes = this.numbers.filter(num => num % 2 == 0).reduce((sum, num) => sum + num, 0);
    console.log(newRes);
  }
  groupUser() {
    let group = this.Newusers.reduce((acc, user) => {
      if (!acc[user.age]) {
        acc[user.age] = [];
      }
      acc[user.age].push(user);
      return acc;
    }, {} as any);
    console.log(group);
  }
}
