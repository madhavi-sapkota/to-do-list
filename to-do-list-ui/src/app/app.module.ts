import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtoDoComponent } from './pages/tasks-page/task-list/addto-do/addto-do.component';
import { EditDialogComponent } from './pages/tasks-page/task-list/task/edit-dialog/edit-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AddDialogComponent } from './pages/tasks-page/task-list/addto-do/add-dialog/add-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { HumanizedDateComponent } from './pages/tasks-page/task-list/task/humanized-date/humanized-date.component';
import { TaskComponent } from './pages/tasks-page/task-list/task/task.component';
import { TaskListComponent } from './pages/tasks-page/task-list/task-list.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginComponent } from './pages/login-page/login/login.component';
import { RegisterComponent } from './pages/register-page/register/register.component';
import { TokenAuthorizationService } from './services/token-authorization.service';
import { CookieService } from 'ngx-cookie-service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SignOutComponent } from './pages/tasks-page/sign-out/sign-out.component';

@NgModule({
  declarations: [
    AppComponent,
    AddtoDoComponent,
    EditDialogComponent,
    AddDialogComponent,
    HumanizedDateComponent,
    TaskComponent,
    TaskListComponent,
    TasksPageComponent,
    RegisterPageComponent,
    LoginPageComponent,
    LoginComponent,
    RegisterComponent,
    SignOutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    ReactiveFormsModule,
    MatToolbarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenAuthorizationService,
      multi: true,
    },
    CookieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
