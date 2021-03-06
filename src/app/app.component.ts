import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amashon-frontend';
  isOpen: boolean;

  constructor(
    private router: Router
  ) {
    this.isOpen = false;
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

  menuHome(): void {
    this.toggleMenu();
    this.router.navigate(['/home']);
  }
}
