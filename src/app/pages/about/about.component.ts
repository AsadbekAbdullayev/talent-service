import { Component, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { UserStorageService } from '../../services/user-storage.service';
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
  users: any[] = [
    {
      id: 1,
      firstName: 'Asadbek',
      lastName: 'Abdullayev',
      email: 'asadbekmmm127@gmail.com',
      jobPositon: 'Frontend developer',
      selectedSkills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
    },
    {
      id: 2,
      firstName: 'Javlon ',
      lastName: 'Shamsiddinov',
      email: 'djavlon@gmail.com',
      jobPositon: 'Backend developer',
      selectedSkills: ['HTML', 'CSS', 'JavaScript'],
    },
  ];
  ngOnInit(): void {
    this.loadUsersFromLocalStorage();
  }
  loadUsersFromLocalStorage(): void {
    this.users = this.userStorageService.getUsers();
  }
}
