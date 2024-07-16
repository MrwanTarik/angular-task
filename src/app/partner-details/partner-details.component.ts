import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-partner-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './partner-details.component.html',
  styleUrl: './partner-details.component.css',
})
export class PartnerDetailsComponent {
  departmentType = new FormControl('');
  arabicDepartmentName = new FormControl('');
  englishDepartmentName = new FormControl('');
  serviceType = new FormControl('');
  commerceApp = new FormControl(false);
  commercialBranch = new FormControl(false);
  commercialRegistrationNumber = new FormControl('');
  aboutThePartner = new FormControl('');

  submitForm(event: Event) {
    event.preventDefault();
    console.log('Form Data:', {
      departmentType: this.departmentType.value,
      arabicDepartmentName: this.arabicDepartmentName.value,
    });
  }
}
