import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import * as CryptoJS from "crypto-js";
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  appUrl=environment.serviceURL
  constructor(private http:HttpClient){

  }
  // registerUserDaa(formData:any):Observable<any>{   // octane
  //   this.appUrl=this.appUrl+'userRegistration';
  //   let desnResponse = this.http.post(this.appUrl, formData);
  //   return desnResponse;
  // }
  registerUserDaa(formData:any):Observable<any>{
    let desnResponse = this.http.post(this.appUrl + 'createUser', formData);
    return desnResponse;
  }
  getTotalUser():Observable<any>{
    let desnResponse = this.http.get(this.appUrl + 'getTotalUser');
    console.log(desnResponse);
    return desnResponse;
  }
  loginUser(formData:any):Observable<any>{
    this.appUrl=this.appUrl+'login';
    let desnResponse=this.http.post(this.appUrl,formData);
    return desnResponse;
  }
  checkEmail(formData:any):Observable<any>{
    let desnResponse=this.http.post(this.appUrl+'check-email',formData);
    return desnResponse;
  }
  getToken() {
    return localStorage.getItem('token');
  }
  encryptData(value:string){
    let val=CryptoJS.AES.encrypt(value,environment.secretKey).toString();
    return val;
  }
  decryptData(value:string){
    let val=CryptoJS.AES.decrypt(value,environment.secretKey);
     const decrypted = val.toString(CryptoJS.enc.Utf8);
    return decrypted;
  }

}
