import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  private storageKey = 'users';

  constructor() {}

  saveUsers(users: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  getUsers(): any[] {
    const storedUsers = localStorage.getItem(this.storageKey);
    return storedUsers ? JSON.parse(storedUsers) : [];
  }

  addUser(user: any): void {
    const users = this.getUsers();
    users.push(user);
    this.saveUsers(users);
  }

  clearUsers(): void {
    localStorage.removeItem(this.storageKey);
  }
}
