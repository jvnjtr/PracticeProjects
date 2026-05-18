import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule]
})
export class LoginComponent {
  onSubmit(formData: any) {
    let email = formData.value.email;
    let password = formData.value.password;

    console.log('Email:', email);
    console.log('Password:', password);
  }
}
