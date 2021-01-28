import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input('placeHolder') placeHolder: String = 'Type to filter...';
  @Input('search') search: string;
  @Output('searchChange') searchChange: EventEmitter<any> = new EventEmitter();
  filter: string;

  constructor() { }

  ngOnInit(): void {
  }

  updateFilterChange(event): void {

  }

  updateFilter(event): void {
    if (event.key === 'Enter') {
      this.searchChange.emit(this.search);
    }
  }

  searching(): void {
    // this.search = this.filter;
    this.searchChange.emit(this.search);
  }
}
