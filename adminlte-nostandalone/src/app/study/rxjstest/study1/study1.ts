import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { switchMap, debounce, debounceTime, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-study1',
  standalone: false,
  templateUrl: './study1.html',
  styleUrl: './study1.css',
})
export class Study1 implements OnInit, OnDestroy {
  searchSubscription!: Subscription;
  searchControl = new FormControl('');
  products: any[] = [];
  comments: any[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    // ===============================
    // SWITCHMAP EXAMPLE
    // ===============================
    this.searchSubscription=this.searchControl.valueChanges.pipe(
      debounceTime(500),
      switchMap((value: any) => {
        console.log('API Called:', value);
        return this.http.get<any[]>(
          `https://jsonplaceholder.typicode.com/posts?q=${value}`
        );
      })
    ).subscribe(response => {
      console.log('Search Result', response);
      this.products = response;

    });
  }
  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
