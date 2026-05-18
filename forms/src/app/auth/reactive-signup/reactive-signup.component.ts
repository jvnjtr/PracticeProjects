import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-signup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './reactive-signup.component.html',
  styleUrl: './reactive-signup.component.css',
})
export class ReactiveSignupComponent {
  myForm=new FormGroup(
    {
      email:new FormControl(''),
      password:new FormControl('')
    }
  )
   onSubmit() {
    console.log(this.myForm.value);
   }
}
