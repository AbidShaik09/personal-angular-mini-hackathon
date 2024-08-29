import { Component } from '@angular/core';
import { Deposit } from '../models/deposit';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {
  deposits:Array<Deposit> = []
  deposit:Deposit = new Deposit()

  depositAmount(){
    this.deposits.push(this.deposit);
    this.deposit = new Deposit()
  }
  clear(){
    this.deposit  =new Deposit()
  }

}
