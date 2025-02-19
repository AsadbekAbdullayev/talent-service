import { Component } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserStorageService } from '../../user-storage.service';
@Component({
  selector: 'app-home',
  imports: [NzModalModule, FormsModule, NzSelectModule, NzInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    private message: NzMessageService,
    private userStorageService: UserStorageService
  ) {}

  isVisible = false;
  // user details
  firstName = '';
  lastName = '';
  email = '';
  jobPositon = '';
  selectedSkills = [];
  skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Angular',
    'Vue.js',
    'Svelte',
    'Node.js',
    'Express.js',
    'Next.js',
    'Nuxt.js',
    'Bootstrap',
    'Tailwind CSS',
    'SASS',
    'Less',
    'Styled Components',
    'Material UI',
    'Ant Design',
    'GraphQL',
    'REST API',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Firebase',
    'Docker',
    'Kubernetes',
    'Jenkins',
    'WebAssembly',
    'Three.js',
  ];

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  submitForm() {
    if (
      !this.firstName ||
      !this.lastName ||
      !this.email ||
      !this.jobPositon ||
      this.selectedSkills.length === 0
    ) {
      this.message.error('All fields are required');
      return;
    }

    // Save to localStorage

    const userDetails = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      jobPositon: this.jobPositon,
      selectedSkills: this.selectedSkills,
    };
    this.userStorageService.addUser(userDetails);
    // Save updated list to localStorage
    // Clear all data
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.jobPositon = '';
    this.selectedSkills = [];

    // Close modal
    this.isVisible = false;
    this.message.success('User saved successfully!');
    // Display success message with ng-zorro-antd
  }
}
