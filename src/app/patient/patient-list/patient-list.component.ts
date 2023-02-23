import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  patients: Array<any> =[
    {
      "Id":1,
      "Name": "Patient 1",
      "Age": 40,
      "Gender": "Male"
    },
    {
      "Id":2,
      "Name": "Patient 2",
      "Age": 20,
      "Gender": "Female"
    },
    {
      "Id":3,
      "Name": "Patient 3",
      "Age": 33,
      "Gender": "Male"
    },
    {
      "Id":4,
      "Name": "Patient 4",
      "Age": 60,
      "Gender": "Female"
    },
    {
      "Id":5,
      "Name": "Patient 5",
      "Age": 55,
      "Gender": "Male"
    },
    {
      "Id":6,
      "Name": "Patient 6",
      "Age": 30,
      "Gender": "Female"
    },
    {
      "Id":7,
      "Name": "Patient 7",
      "Age": 20,
      "Gender": "Male"
    },

  ]

  constructor(){}

  ngOnInit(): void {

  }
}
