import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class SearchComponent {
  searchTerm: string = '';
  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
    this.searchChange.emit(this.searchTerm); 
}
}