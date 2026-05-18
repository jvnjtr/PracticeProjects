import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Study2 } from './study2';

describe('Study2', () => {
  let component: Study2;
  let fixture: ComponentFixture<Study2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Study2],
    }).compileComponents();

    fixture = TestBed.createComponent(Study2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
