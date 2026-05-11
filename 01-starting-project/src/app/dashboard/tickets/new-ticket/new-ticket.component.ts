import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormArray,FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit {
  ticketForm !:FormGroup;
  constructor(private fb:FormBuilder){
    
  }
   ngOnInit(): void {
    this.ticketForm=this.fb.group({
      title:['',[Validators.required]],
      description:['',[Validators.required]]
    });
  }
  submitTicket(){
    if(this.ticketForm.invalid){
      this.ticketForm.markAllAsTouched();
      return;
    }
  }
}
