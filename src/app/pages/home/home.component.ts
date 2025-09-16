import { Component } from '@angular/core';
import { RegisterComponent } from '../../feature/register/register.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
  
export class HomeComponent {
  companies = [
    {
      name: 'Google',
      logo: 'https://logo.clearbit.com/google.com',
      description:
        'Join Google and shape the future of AI, search, and technology.',
      link: 'https://careers.google.com',
    },
    {
      name: 'Meta',
      logo: 'https://logo.clearbit.com/meta.com',
      description: 'Be part of the next evolution of the internet at Meta.',
      link: 'https://www.metacareers.com',
    },
    {
      name: 'Amazon',
      logo: 'https://logo.clearbit.com/amazon.com',
      description:
        'Innovate and work with cutting-edge technology at Amazon.',
      link: 'https://www.amazon.jobs',
    },
  ];
}
