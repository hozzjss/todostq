import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  notifications: string[] = [];
  constructor() { }
  notify(notification: string): void {
    this.notifications.push(notification);
  }
}
