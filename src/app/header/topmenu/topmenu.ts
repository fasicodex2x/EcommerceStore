import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'top-menu',         // ✅ corrected selector
  standalone: true,
  imports: [RouterModule],
  templateUrl: './topmenu.html', // ✅ your actual file names
  styleUrls: ['./topmenu.css']
})
export class TopmenuComponent {}

