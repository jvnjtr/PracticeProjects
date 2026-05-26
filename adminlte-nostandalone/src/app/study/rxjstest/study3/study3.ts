import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { switchMap, debounce, debounceTime, of, combineLatest } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-study3',
  standalone: false,
  templateUrl: './study3.html',
  styleUrl: './study3.css',
})
export class Study3 implements OnInit, OnDestroy {
  searchSubscription!: Subscription;
  searchControl = new FormControl('');
  categoryControl = new FormControl('');
  products: any[] = [];
  comments: any[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    // ===============================
    // combineLatest EXAMPLE
    // ===============================
   combineLatest([
      this.searchControl.valueChanges,
      this.categoryControl.valueChanges
    ]).subscribe(([search, category]) => {

      console.log('Search:', search);
      console.log('Category:', category);

    });
  }
  ngOnDestroy(): void {
    if (this.searchSubscription) {
    this.searchSubscription.unsubscribe();
  }
  }
}

