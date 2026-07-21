import { ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from '../services/user-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Header } from "../header/header";
@Component({
  selector: 'app-view-user',
  imports: [CommonModule, Header],
  templateUrl: './view-user.html',
  styleUrl: './view-user.css',
})
export class ViewUser {
  users: any = [];
  selectedUsers: number[] = [];

  allSelected = false;

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    let data = {};
    this.userService.getUsers(data).subscribe({
      next: (res: any) => {
        if (res.status == true) {
          console.log('API Response', res);
          this.users = res.data;
          this.cdr.detectChanges();
          console.log('Users after assignment', this.users);
          console.log('Length', this.users.length);
        }
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  editUser(user: any): void {
    // Implement the logic to edit a user, e.g., navigate to an edit form with the user's data
    console.log('Edit user:', user);
    this.router.navigate(['/add', user]);
  }
  toggleUser(userId: number) {
    const index = this.selectedUsers.indexOf(userId);

    if (index > -1) {
      this.selectedUsers.splice(index, 1);
    } else {
      this.selectedUsers.push(userId);
    }

    this.allSelected = this.selectedUsers.length === this.users.length;
  }

  toggleSelectAll(event: any) {
    this.allSelected = event.target.checked;

    if (this.allSelected) {
      this.selectedUsers = this.users.map((u: any) => u.userId);
    } else {
      this.selectedUsers = [];
    }
  }

  clearSelection() {
    this.selectedUsers = [];
    this.allSelected = false;
  }

  deleteSelected() {
    if (!confirm('Delete selected users?')) {
      return;
    }

    console.log(this.selectedUsers);
    // Implement the logic to delete a user, e.g., make an HTTP request to the backend API
    console.log('Delete user:', this.selectedUsers);
    let data = {
      userId: this.selectedUsers,
    };
    this.userService.deleteUser(data).subscribe({
      next: (response) => {
        if (response.status == 200) {
          alert(response.message);
          this.loadUsers();
        }
      },
      error: (error) => {
        console.error('Error uploading image:', error);
        // Handle the error as needed
      },
    });
  }
  deleteUser(user: number) {
    if (!(this.selectedUsers.length > 0)) {
      alert('Please select user');
    } else {
      this.deleteSelected();
    }
  }
}
