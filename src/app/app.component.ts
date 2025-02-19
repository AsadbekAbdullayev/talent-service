import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterModule,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { NavbarComponent } from './shared/ui/navbar/navbar.component';
import { FooterComponent } from './shared/ui/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'amazing-angular-app';
}
