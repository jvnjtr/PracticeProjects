import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormsModule, FormBuilder } from '@angular/forms';
import { emailFormatValidator } from '../validators/email-format';
import { emailExistsValidator } from '../validators/email-exist';
import { AuthService } from '../Services/auth-service';

@Component({
  selector: 'app-reactive-registration',
  standalone: false,
  templateUrl: './reactive-registration.html',
  styleUrl: './reactive-registration.css',
})
export class ReactiveRegistration {
  registration !: FormGroup;
  selectedFile: File | null = null;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.registration = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', {
        validators: [
          Validators.required,
          emailFormatValidator()
        ],
        asyncValidators: [
          emailExistsValidator(this.authService)
        ],
        updateOn: 'blur'
      }],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      userimage: [''],
      role: [''],
      acquisition: [''],
      terms: [false, Validators.requiredTrue],
      address: this.formBuilder.array([
        this.createAddress()
      ])
    });
  }
  submitRegistration() {
    if (this.registration.invalid) {
      this.registration.markAllAsTouched();
      return;
    }
  }
  createAddress(): FormGroup {
    return this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    })
  }
  addAddress() {
    (this.registration.get('address') as FormArray).push(this.createAddress());
  }
  get address(): FormArray {
    return this.registration.get('address') as FormArray;
  }
  removeAddress(index: number) {
    (this.registration.get('address') as FormArray).removeAt(index);
  }
  // File Change
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      // Store file inside form
      this.registration.patchValue({
        userimage: file
      });
      console.log(file);
    }
  }
}
