import { Component, OnInit, Input } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() notification: string;
  show: boolean;
  constructor(public notificationService: NotificationService) { }

  ngOnInit(): void {
    this.show = true;
    setTimeout(() => this.notificationService.notifications.shift(), 1500);
  }
}
