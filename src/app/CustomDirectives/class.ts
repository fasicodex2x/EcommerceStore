import { Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appClass]'

})
export class Class {

  constructor(private element: ElementRef, private render: Renderer2) {

   }
@Input() set display (value:object){
  let entries = Object.entries(value);
  console.log(entries);
  
};
}
