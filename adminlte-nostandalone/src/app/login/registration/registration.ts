import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';
import { AuthService } from '../../Services/auth-service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration implements OnInit {
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService) {

  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      emailId: ['', [Validators.required, Validators.email, Validators.minLength(5)]],
      mobile: ['', [Validators.required, Validators.maxLength(10)]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
      userLoginId: ['', [Validators.required, Validators.minLength(6)]],
      userPassword: ['', [Validators.required, Validators.minLength(6)]],
      userImage: [''],
      
      
      

    });
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.auth.registerUserDaa(this.registerForm.value).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response.status == 200) {
          Swal.fire({
            text: response.message,
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          }).then((result) => {
            this.registerForm.reset();
          })
        } else {
          Swal.fire({
            text: response.message,
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          })
        }

        this.registerForm.reset();
      },
      error: (error) => {
        console.log('Error Response:', error);
        // backend validation / auth message
        if (error.status === 401) {
          alert('Invalid Credentials');
        }
        if (error.status === 422) {
          console.log(error.error.errors);
        }
      }
    })
  }
  onFileChange(event: any) {
    const file = event.target.files[0];

    // If no file selected
    if (!file) {
      this.registerForm.patchValue({
        file: null
      });
      this.registerForm.get('file')?.setErrors(null);
      return;
    }

    const allowedTypes = [
      'image/jpeg',
      'image/png'
    ];

    const maxSize = 5 * 1024 * 1024; // 2 MB
    let errors: any = null;
    // Validate file type
    if (!allowedTypes.includes(file.type)) {
      errors = { ...errors, invalidFileType: true };
    }
    // Validate file size
    if (file.size > maxSize) {
      errors = { ...errors, maxSize: true };
    }
    if (errors) {
      this.registerForm.get('file')?.setErrors(errors);
    } else {
      this.registerForm.patchValue({
        file: file
      });

      this.registerForm.get('file')?.setErrors(null);
    }
    this.registerForm.get('file')?.markAsTouched();
  }

}
