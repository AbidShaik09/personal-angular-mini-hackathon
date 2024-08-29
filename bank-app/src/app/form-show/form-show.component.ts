import { Component, Input } from '@angular/core';
import { Deposit } from '../models/deposit';

@Component({
  selector: 'app-form-show',
  templateUrl: './form-show.component.html',
  styleUrls: ['./form-show.component.css']
})
export class FormShowComponent {
  @Input() deposits : Array<Deposit> =[]

  
}
