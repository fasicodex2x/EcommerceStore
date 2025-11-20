import { Component, Input, input, OnChanges } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TopmenuComponent } from './header/topmenu/topmenu';
import { Productlist } from './productlist/productlist';
import { ParentComponent } from './parent/parent';
import { ChildComponent } from './child/child';
import { CommonModule } from '@angular/common';
import { Demo } from './demo/demo';
import { Class } from './CustomDirectives/class';
// ab hum ek component banaya howa kisi or File mein call krty hain to uske liye hume us component ko import krna parta hai
// yh line meina Topheader component ko import kiya hai
import { Topheader } from './topheader/topheader';
import { TestComponentRenderer } from '@angular/core/testing';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, Topheader, TopmenuComponent, Productlist, ParentComponent, ChildComponent, Demo, CommonModule, Class],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 17 Standalone App'; 
  InputVal: string = '';
  toDestroy: boolean = false;
 message:string[] =[];
 constructor(){
  //console.log('App Component Constructor Called');
 }
  ngAfterViewInit(){
//console.log('ngAfterViewInit Test Called');
  }
 
 btnClick(MyTestBox :string)
  {
    //console.log(MyTestBox);
    this.InputVal = (MyTestBox);
  }
  DestroyComponent(){
    //this.toDestroy = !this.toDestroy;
  }
}



