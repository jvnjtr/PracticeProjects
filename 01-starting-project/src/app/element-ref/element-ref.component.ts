import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup,FormArray,FormBuilder,ReactiveFormsModule,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-element-ref',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './element-ref.component.html',
  styleUrl: './element-ref.component.css'
})
export class ElementRefComponent {
  @ViewChild('myform') private form!:ElementRef<HTMLFormElement>;
  referenceForm !:FormGroup;
  formSubmit(userName:any){
      console.log(userName.value);
      this.form.nativeElement.reset();
  }

}
