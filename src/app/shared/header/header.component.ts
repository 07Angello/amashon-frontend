import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpenMenu: boolean;

  constructor() {
    this.isOpenMenu = false;
  }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isOpenMenu = !this.isOpenMenu;
  }

  menuChanged(wasOpen): void {
    this.isOpenMenu = wasOpen;
  }

}
