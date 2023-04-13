import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtoDoComponent } from './Mycomponents/addto-do/addto-do.component';
import { EditDialogComponent } from './Mycomponents/edit-dialog/edit-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AddDialogComponent } from './Mycomponents/add-dialog/add-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { HumanizedDateComponent } from './Mycomponents/humanized-date/humanized-date.component';

@NgModule({
  declarations: [
    AppComponent,
    AddtoDoComponent,
    EditDialogComponent,
    AddDialogComponent,
    HumanizedDateComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
