import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveRegistration } from './reactive-registration';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ReactiveRegistration', () => {
  let component: ReactiveRegistration;
  let fixture: ComponentFixture<ReactiveRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveRegistration],
      imports: [FormsModule,ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveRegistration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
