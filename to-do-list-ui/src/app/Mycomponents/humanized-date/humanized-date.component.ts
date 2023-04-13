import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-humanized-date',
  templateUrl: './humanized-date.component.html',
  styleUrls: ['./humanized-date.component.css'],
})
export class HumanizedDateComponent {
  @Input() date: any;

  get humanizedDate() {
    var now = moment(new Date()); //todays date
    var due = moment(this.date); // another date
    var duration = moment.duration(due.diff(now));
    return moment.duration(duration).humanize(true);
  }
  // this.data.sort((a, b) => new Date(b.date1).getTime() - new Date(a.date1).getTime());
}
