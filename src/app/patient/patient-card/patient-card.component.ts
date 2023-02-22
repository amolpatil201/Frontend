import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})
export class PatientCardComponent {

  Patient: any ={
    "Id":1,
    "Name": "ABC Patient",
    "Age": 40,
    "Gender": "Male"
  }

}
