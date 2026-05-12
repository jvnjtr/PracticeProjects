import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
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
  loginUser(formData:any):Observable<any>{
    this.appUrl=this.appUrl+'login';
    let desnResponse=this.http.post(this.appUrl,formData);
    return desnResponse;
  }
  getToken() {
    return localStorage.getItem('token');
  }

}
