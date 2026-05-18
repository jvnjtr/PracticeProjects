import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../Services/auth-service';

@Component({
  selector: 'app-user-login',
  standalone: false,
  templateUrl: './user-login.html',
  styleUrl: './user-login.css',
})
export class UserLogin implements OnInit {
  loginForm!: FormGroup;
  constructor(private route: Router, private fb: FormBuilder, private auth: AuthService) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginForm = this.fb.group({
      userLoginId: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  submitLogin() {
    //this.route.navigate(['dashboard'])
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.auth.loginUser(this.loginForm.value).subscribe({
      next: (response) => {
        console.log(response);

        if (response.status == 200) {
          localStorage.setItem('token', response.token)
          Swal.fire({
            text: response.message,
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          }).then((result) => {
            this.loginForm.reset();
            this.route.navigateByUrl('/dashboard');
          })
        } else {
          Swal.fire({
            text: response.message,
            icon: 'error',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          })
        }

        this.loginForm.reset();
      },
      error: (err) => {
        Swal.fire({
          text: 'Login failed',
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok'
        });
      }
    })
  }
}
