import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arrayfunction } from './arrayfunction';
import { ActivatedRoute } from '@angular/router';

describe('Arrayfunction', () => {
  let component: Arrayfunction;
  let fixture: ComponentFixture<Arrayfunction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Arrayfunction],
       providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get: (key: string) => 'testValue'
            }
          }
        }
      }
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(Arrayfunction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
