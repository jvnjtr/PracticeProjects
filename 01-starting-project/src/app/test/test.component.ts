import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  testForm!: FormGroup;
  constructor(public fb: FormBuilder) {
    this.testForm = this.fb.group({
      userName: this.fb.array([
        this.createform()
      ])
    });
  }
  get userName(): FormArray {
    return this.testForm.get('userName') as FormArray;
  }
  createform() {
    return this.fb.group({
      userName: ['', Validators.required],
    });
  }
  formSubmit() {
    console.log(this.testForm.value);
  }
  removeRow(index: number) {
    this.userName.removeAt(index);
  }

}
