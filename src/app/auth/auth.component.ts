import { Component, inject, signal } from '@angular/core';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { LogDirective } from '../log.directive';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  hostDirectives: [LogDirective]
})
export class AuthComponent {
  public email = signal<string>('');
  public password = signal<string>('');
  private authService = inject(AuthService);

  public onSubmit() {
    this.authService.authenticate(this.email(), this.password());
  }
}
