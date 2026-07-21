import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  addUser(userData: any): Observable<any> {
    // Implement the logic to add a user, e.g., make an HTTP request to the backend API
    let res = this.httpClient.post('http://localhost:8000/api/addusers', userData);
    console.log(res);
    return res;
  }
  uploadImage(imageData: any): Observable<any> {
    // Implement the logic to upload an image, e.g., make an HTTP request to the backend API
    return this.httpClient.post('http://localhost:8000/api/uploadimage', imageData);
  }
  getUsers(data: any): Observable<any> {
    // Implement the logic to get users, e.g., make an HTTP request to the backend API
    return this.httpClient.post('http://localhost:8000/api/getUsers', data,{
        withCredentials: true
      });
  }
  deleteUser(data: any): Observable<any> {
    // Implement the logic to get users, e.g., make an HTTP request to the backend API
    return this.httpClient.post('http://localhost:8000/api/deletetUsers', data);
  }
  refreshToken() {
    return this.httpClient.post('http://localhost:8000/api/refresh', {},
    {
      withCredentials: true
    });
  }
  login(data: any) {
    return this.httpClient.post('http://localhost:8000/api/login', data,{
        withCredentials: true
      });
  }
   refresh() {
    return this.httpClient.post('http://localhost:8000/api/refresh',{},{
        withCredentials: true
      }
    );
  }
   logout() {
    return this.httpClient.post('http://localhost:8000/api/logout',{},{
        withCredentials: true
      }
    );
  }
}
