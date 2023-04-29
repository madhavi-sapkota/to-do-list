import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

const API_BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}

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
      .subscribe((res: any) => {
        let bearerToken = `Bearer ${res.token}`;
        this.cookieService.set('bearer-token', bearerToken);
        this.router.navigate(['tasks']);
      });
  }

  logoutUser() {
    this.cookieService.deleteAll();
    this.router.navigate(['login']);
  }
}
