import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
  FormArray,
} from '@angular/forms';
import { UserService } from '../services/user-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Header } from "../header/header";

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, Header],
  providers: [FormBuilder, Validators],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
  userForm!: FormGroup;
  userId!: any;
  mySkill = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: 'PHP' },
    { id: 4, name: 'Node js' },
    { id: 5, name: 'Python' },
  ];
  constructor(
    private fb: FormBuilder,
    private validators: Validators,
    private userService: UserService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      gender: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      address: ['', [Validators.maxLength(255)]],
      userImage: [''],
      emailId: ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
      userLoginId: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      userPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(20)],
      ],
      priviledge: [3],
      userId: [''],
      imageUpload: [0],
      skills: this.fb.array([this.createSkill()]),
    });
  }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userId = id ? parseInt(id) : null;
    this.getUser(this.userId);
  }
  createSkill(): FormGroup {
    return this.fb.group({
      skillName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      noOfYear: ['', [Validators.required, Validators.min(1)]],
      rowError: [''],
    });
  }
  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    const userId = this.userForm.get('userId')?.value;

    const formData =
      userId > 0
        ? this.userForm.getRawValue() // includes disabled userLoginId
        : this.userForm.value;
    console.log(this.userForm.value);
    this.userService.addUser(formData).subscribe({
      next: (response) => {
        if (response.status == 200) {
          alert('User added successfully!');
          this.userForm.reset();
          this.route.navigate(['/view']);
        } else {
          alert(response.message);
        }
        // Handle the response as needed
      },
      error: (error) => {
        alert(error);
        console.error('Error adding user:', error);
        // Handle the error as needed
      },
    });
  }
  onFileChange(event: any): void {
    const file = event.target.files[0];
    let formData = new FormData();
    formData.append('file', file);
    if (file) {
      this.userService.uploadImage(formData).subscribe({
        next: (response) => {
          console.log('Image uploaded successfully:', response);
          if (response.status == 200) {
            this.userForm.patchValue({ userImage: response.path });
            this.userForm.patchValue({ imageUpload: 1 });
          }
          // Handle the response as needed
        },
        error: (error) => {
          console.error('Error uploading image:', error);
          // Handle the error as needed
        },
      });
    }
  }
  getUser(userId: number) {
    if (userId) {
      let data = { userId: userId };
      this.userService.getUsers(data).subscribe({
        next: (res: any) => {
          if (res.status == true) {
            console.log('API Response', res);
            this.userForm.patchValue(res.data);
            // loginId readonly
            this.userForm.get('userLoginId')?.disable();

            // remove password validations
            this.userForm.get('userPassword')?.clearValidators();
            this.userForm.get('confirmPassword')?.clearValidators();

            this.userForm.get('userPassword')?.updateValueAndValidity();
            this.userForm.get('confirmPassword')?.updateValueAndValidity();

            this.userForm.updateValueAndValidity();
          }
        },
      });
    }
  }
  get skills(): FormArray {
    return this.userForm.get('skills') as FormArray;
  }
  addSkill() {
    this.skills.controls.forEach((row) => {
      row.setErrors(null);
      row.get('rowError')?.setValue('');
    });
    const rows = this.skills.controls;
    // check previous rows completed
    for (let row of rows) {
      if (row.invalid) {
        row.setErrors({
          incomplete: true,
        });
        row.markAllAsTouched();
        alert('Complete existing skill first');
        return;
      }
    }

    // duplicate skill check
    // duplicate check
    const selected = rows.map((r) => r.get('skillName')?.value).filter(Boolean);
    if (selected.length !== new Set(selected).size) {
      rows.forEach((row) => {
        const current = row.get('skillName')?.value;
        if (current && selected.filter((x) => x === current).length > 1) {
          row.setErrors({
            duplicate: true,
          });
        }
      });

      return;
    }
    this.skills.push(this.createSkill());
  }
  removeSkill(index: number) {
    (this.userForm.get('skills') as FormArray).removeAt(index);
  }
}
