import { Component } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css'],
})
export class SignOutComponent {
  constructor(private UserServicesService: UserServicesService) {}

  onClick() {
    this.UserServicesService.logoutUser();
  }
}
