import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Study3 } from './study3';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('Study3', () => {
  let component: Study3;
  let fixture: ComponentFixture<Study3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Study3],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Study3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
