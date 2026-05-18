import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardlanding } from './dashboardlanding';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Dashboardlanding', () => {
  let component: Dashboardlanding;
  let fixture: ComponentFixture<Dashboardlanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dashboardlanding],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboardlanding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
