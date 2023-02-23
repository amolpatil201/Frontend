import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.scss']
})

export class PatientCardComponent {
  @Input() patient : any

}
