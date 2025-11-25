import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedTab: string = 'home';

  @Output() subscribeClicked = new EventEmitter<void>();  // <<< add this

  HomeClicked() {
    this.selectedTab = 'home';
  }

  AdminClicked() {
    this.selectedTab = 'admin';
  }
OnClickForUser()
{
 this.subscribeClicked.emit();   
}
  OnSubscribe() {
    // alert('Thank you fo Subscribing');   // remove or keep if you want
          // <<< fire event to parent
          alert('thank you subscribe');
  }
}
