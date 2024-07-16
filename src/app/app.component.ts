import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showBranchDetails: boolean = true;
  showCommerceDetails: boolean = true;
  branchDetails: Array<any> = [
    {
      id: Math.random() * 10000,
    },
  ];
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
  addNewRow(event: Event) {
    event.preventDefault();
    this.branchDetails.push({
      id: Math.random() * 10000,
    });
  }
  deleteRow(event: Event, id: number) {
    event.preventDefault();
    this.branchDetails = this.branchDetails.filter((branch) => {
      return branch.id != id;
    });
  }
}
