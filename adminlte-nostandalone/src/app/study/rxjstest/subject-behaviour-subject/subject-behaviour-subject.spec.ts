import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBehaviourSubject } from './subject-behaviour-subject';

describe('SubjectBehaviourSubject', () => {
  let component: SubjectBehaviourSubject;
  let fixture: ComponentFixture<SubjectBehaviourSubject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectBehaviourSubject],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectBehaviourSubject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
