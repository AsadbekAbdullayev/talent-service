import { Component } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserStorageService } from '../../services/user-storage.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-register',
  imports: [NzModalModule, FormsModule, NzSelectModule, NzInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  isVisible = false;

  // user details
  firstName = '';
  lastName = '';
  email = '';
  jobPosition = '';
  selectedSkills: string[] = [];

  readonly skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Svelte',
    'Node.js', 'Express.js', 'Next.js', 'Nuxt.js', 'Bootstrap', 'Tailwind CSS', 'SASS',
    'Less', 'Styled Components', 'Material UI', 'Ant Design', 'GraphQL', 'REST API',
    'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Docker', 'Kubernetes', 'Jenkins',
    'WebAssembly', 'Three.js',
  ];

  constructor(
    private message: NzMessageService,
    private userStorageService: UserStorageService
  ) {}

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  private resetForm(): void {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.jobPosition = '';
    this.selectedSkills = [];
  }

  private isFormValid(): boolean {
    return !!(
      this.firstName &&
      this.lastName &&
      this.email &&
      this.jobPosition &&
      this.selectedSkills.length
    );
  }

  submitForm(): void {
    if (!this.isFormValid()) {
      this.message.error('All fields are required');
      return;
    }

    const userDetails = {
      id: uuidv4(),
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      jobPosition: this.jobPosition,
      selectedSkills: this.selectedSkills,
    };

    this.userStorageService.addUser(userDetails);

    this.resetForm();
    this.isVisible = false;

    this.message.success('User saved successfully!');
  }
}
