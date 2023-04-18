import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  constructor(private http: HttpClient) {}

  registerUser(userEmail: any, userPassword: any) {
    this.http
      .post(`${API_BASE_URL}/register`, {
        email: userEmail,
        password: userPassword,
      })
      .subscribe((res) => {
        console.log(res);
        alert('sign up successfully');
      });
    console.log(userEmail, userPassword);
  }

  loginUser(userEmail: any, userPassword: any) {
    this.http
      .post(`${API_BASE_URL}/login`, {
        email: userEmail,
        password: userPassword,
      })
      .subscribe((res) => {
        console.log(res);
        alert('user logged in successfully');
      });
  }
}
