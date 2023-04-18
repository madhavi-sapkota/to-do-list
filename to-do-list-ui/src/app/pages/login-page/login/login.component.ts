import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userEmail = '';
  userPassword: any;

  constructor(private userServiceServices: UserServicesService) {}

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    this.userServiceServices.loginUser(this.userEmail, this.userPassword);
  }
}
