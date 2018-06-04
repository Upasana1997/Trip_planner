import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPlannedComponent } from './trip-planned.component';

describe('TripPlannedComponent', () => {
  let component: TripPlannedComponent;
  let fixture: ComponentFixture<TripPlannedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripPlannedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPlannedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
