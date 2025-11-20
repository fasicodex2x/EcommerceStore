import { Component, ElementRef, viewChild, ViewChild, viewChildren } from '@angular/core';
import { ChildComponent } from './../child/child';

@Component({
  selector: 'app-parent',
  imports: [ ChildComponent ],
  templateUrl: './parent.html',
  styleUrls: ['./parent.css'],
})
export class ParentComponent {
@ViewChild('Paragraph') paraEl! :ElementRef;
showParaValue(){
  console.log(this.paraEl);
}
}
