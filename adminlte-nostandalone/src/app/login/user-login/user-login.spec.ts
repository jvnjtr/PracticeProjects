import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogin } from './user-login';
import { ReactiveFormsModule } from '@angular/forms';

describe('UserLogin', () => {
  let component: UserLogin;
  let fixture: ComponentFixture<UserLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserLogin],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UserLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
