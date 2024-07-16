import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showBranchDetails: boolean = true;
  showCommerceDetails: boolean = true;
  onCheckDepartmentOne(event: Event) {
    const checkbox = event.target as HTMLInputElement;

    if (checkbox.checked) {
      this.showBranchDetails = false;
    } else {
      this.showBranchDetails = true;
    }
  }
  onCheckDepartmentTwo(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.showCommerceDetails = false;
    } else {
      this.showCommerceDetails = true;
    }
  }
}
