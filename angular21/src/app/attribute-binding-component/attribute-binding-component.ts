import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-attribute-binding-component',
  imports: [],
  templateUrl: './attribute-binding-component.html',
  styleUrl: './attribute-binding-component.scss',
})
export class AttributeBindingComponent {
  public userName:any=signal('JivanJyoti');
  amount:any=1000;
  tax:any=18;
  get fullname(){
    return this.userName()+' '+'Ray';
  }
  get amountWithTax(){
    return this.amount+(this.amount*this.tax/100);
  }

}
