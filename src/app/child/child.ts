import { Component, contentChild, ContentChildren, ElementRef } from '@angular/core';
import { Test } from './test/test';
import { TestComponentRenderer } from '@angular/core/testing';
@Component({
  selector: 'app-child',
  standalone:true,
  imports:[Test],
  templateUrl: './child.html',
  styleUrls: ['./child.css'],
})
export class ChildComponent {
@ContentChildren('para') paragraphpEl! :ElementRef;
@ContentChildren('TestComponent') testEl! :Test;
StyleParagraph(){
  console.log(this.paragraphpEl);
  console.log(this.testEl.name);
}

}
