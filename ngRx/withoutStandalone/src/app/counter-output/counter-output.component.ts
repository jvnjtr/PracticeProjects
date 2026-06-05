import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent{
  counter = 0;
  counterServiceSub?: Subscription;
  counterValue$!:Observable<any>;
  constructor(private store:Store<{counterData:any}>) {
   this.counterValue$=this.store.select('counterData');
 
  }

 
}
