import { Component } from '@angular/core';
import { AuthGuardService } from '@receiver-angular/core-data';

@Component({
  selector: 'receiver-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '';

  links = [{ path: '/receivers', icon: 'view_list', title: 'Receivers' }];

  userIsAuthenticated = this.authService.isAuthenticated;
  constructor(private authService: AuthGuardService) {}
}
