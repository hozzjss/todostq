import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  notifications: string[] = [];
  constructor() { }
  notify(notification: string) {
    this.notifications.push(notification);
  }
}
