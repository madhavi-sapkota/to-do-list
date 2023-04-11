import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';

@Component({
  selector: 'app-addto-do',
  templateUrl: './addto-do.component.html',
  styleUrls: ['./addto-do.component.css'],
})
export class AddtoDoComponent {
  constructor(public dialog: MatDialog) {}

  openAddDialog(): void {
    this.dialog.open(AddDialogComponent);
  }
}
