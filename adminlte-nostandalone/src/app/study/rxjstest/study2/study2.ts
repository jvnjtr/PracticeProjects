import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { switchMap, debounce, debounceTime, of, mergeMap, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-study2',
  standalone: false,
  templateUrl: './study2.html',
  styleUrl: './study2.css',
})
export class Study2 implements OnInit, OnDestroy {
  searchSubscription!: Subscription;

  postid:any[]=[1,2,3];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    // ===============================
    // MERGEMAP EXAMPLE
    // ===============================
     from(this.postid).pipe(
      mergeMap(id => {
        return this.http.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        );
      })
    ).subscribe(response => {
      console.log('MergeMap Response', response);
    });
  }
  ngOnDestroy(): void {
    if (this.searchSubscription) {
    this.searchSubscription.unsubscribe();
  }
  }
}

