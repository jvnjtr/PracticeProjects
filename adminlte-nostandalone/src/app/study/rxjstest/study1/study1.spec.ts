import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Study1 } from './study1';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('Study1', () => {
  let component: Study1;
  let fixture: ComponentFixture<Study1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Study1],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Study1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
