import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arrayfunction } from './arrayfunction';

describe('Arrayfunction', () => {
  let component: Arrayfunction;
  let fixture: ComponentFixture<Arrayfunction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Arrayfunction],
    }).compileComponents();

    fixture = TestBed.createComponent(Arrayfunction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
