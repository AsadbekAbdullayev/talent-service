import { Component, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { UserStorageService } from '../../user-storage.service';
import { NzCardModule } from 'ng-zorro-antd/card'; // ✅ Import Card Module
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  imports: [CommonModule, NzTableModule, NzTagModule, NzCardModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  constructor(private userStorageService: UserStorageService) {}
  users: any[] = [];
  ngOnInit(): void {
    this.loadUsersFromLocalStorage();
  }
  loadUsersFromLocalStorage(): void {
    this.users = this.userStorageService.getUsers();
    console.log(this.users);
  }
}
