import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardlanding } from './dashboardlanding';

describe('Dashboardlanding', () => {
  let component: Dashboardlanding;
  let fixture: ComponentFixture<Dashboardlanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dashboardlanding],
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboardlanding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
