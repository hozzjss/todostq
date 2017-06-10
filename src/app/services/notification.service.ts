import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  notification: string;
  show: boolean;
  constructor() { }
  notify(notification) {
    this.notification = notification;
    this.show = true;
    setTimeout(() => this.show = false, 1500);
  }
}
