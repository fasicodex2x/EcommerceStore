import { Component } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [NgForOf],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class AdminComponent {
  showUserList: boolean = false;

  userlist = [
     { name: "Minahil", gender: "Female", subtype: "Premium", active: true },
    { name: "Ali", gender: "Male", subtype: "Standard", active: false },
  ];




  onAdminClick() {

 this.userlist = [
    { name: "Minahil", gender: "Female", subtype: "Premium", active: true },
    { name: "Ali", gender: "Male", subtype: "Standard", active: false },
  ];

    // this.showUserList = !this.showUserList;
  }


  showUserDetail(user: any) {
    console.log("User Detail:", user);
    alert("User Detail: " + JSON.stringify(user));
  }
}


