import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/services/user-services.service';
import { matchpassword } from './matchpassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userEmail = '';
  userPassword: any;
  confirmPassword: any;

  constructor(private userServiceServices: UserServicesService) {}

  registrationForm: FormGroup = new FormGroup(
    {
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null),
    },
    {
      validators: matchpassword,
    }
  );
  submit() {
    this.userServiceServices.registerUser(this.userEmail, this.userPassword);
  }
}
