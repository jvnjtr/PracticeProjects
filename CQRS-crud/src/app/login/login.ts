import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user-service';
import { Header } from "../header/header";

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, Header],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: UserService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      userLoginId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.auth.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        
        alert('logged in successfully')
        this.router.navigate(['/view']);
      },
      error:(err:any)=>{
        alert('Invalid Login')
      }
    });
  }
}
