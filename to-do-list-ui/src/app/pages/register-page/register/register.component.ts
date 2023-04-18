import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userEmail = '';
  userPassword: any;
  confirmPasword: any;

  constructor(private userServiceServices: UserServicesService) {}

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPasword: new FormControl(''),
  });

  submit() {
    this.userServiceServices.registerUser(this.userEmail, this.userPassword);
  }
}
