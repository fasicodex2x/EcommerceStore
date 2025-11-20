import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, input, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild,} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './demo.html',
  styleUrls: ['./demo.css'],
})
export class Demo implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  title: string = 'Demo'

 @Input() message : string ='';
  //  message: string = ''; 
 @ViewChild('temp') tempPara!: ElementRef;
 @ContentChild('childMsg') paraContent!: ElementRef;
 paracontent: any;
 constructor(){
  //console.log('Demo Constructor Called')
 //console.log('this.title');
 //console.log('this.message');
}
ngOnChanges(changes: SimpleChanges){
//console.log('ngOnChanges Test Called');
//console.log(changes);
}
ngOnInit(){
//console.log('ngOnInit Test Called');
//console.log(this.tempPara.nativeElement.innerHTML);
}
ngDoCheck(){
//console.log('ngDoCheck Test Called');
//console.log('In ngDoCheck this.paraContent');
}
ngAfterContentInit(){
//console.log('ngAfterContentInit Test Called');
//console.log('In ngAftercontentInit', this.paraContent.nativeElement);
}
  ngAfterContentChecked() {
    //console.log('ngAfterContentChecked Called');

    //if (this.paraContent) {
      //console.log(
        //'ContentChild (Checked):',
       // this.paraContent.nativeElement.innerText
      //);
      //}
  }
  ngAfterViewInit(){
console.log('ngAfterViewInit Test Called');
//console.log('In ngAfterViewInit', this.tempPara);
}
ngAfterViewChecked(){
console.log('ngAfterViewChecked Test Called');
//console.log(this.tempPara.nativeElement.textContent)
}
ngOnDestroy(){
console.log('ngOnDestroy Test Called');
}
} 
