import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input('isOpen') isOpen: boolean;
  @Output('menuChanged') menuChanged: EventEmitter<boolean> = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }

  closeMenu(): void {
    this.isOpen = !this.isOpen;
    this.menuChanged.emit(this.isOpen);
  }

}
