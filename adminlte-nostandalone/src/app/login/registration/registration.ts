import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration implements OnInit {
  registerForm!:FormGroup;
  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
}
