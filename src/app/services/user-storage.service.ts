import { Injectable } from '@angular/core';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  jobPosition: string;
  selectedSkills: string[];
}

@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  private readonly storageKey = 'users';

  saveUsers(users: User[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  getUsers(): User[] {
    try {
      const storedUsers = localStorage.getItem(this.storageKey);
      return storedUsers ? (JSON.parse(storedUsers) as User[]) : [];
    } catch {
      return [];
    }
  }

  addUser(user: User): void {
    const users = this.getUsers();
    this.saveUsers([...users, user]);
  }

  clearUsers(): void {
    localStorage.removeItem(this.storageKey);
  }
}
