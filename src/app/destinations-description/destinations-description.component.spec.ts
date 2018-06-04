import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsDescriptionComponent } from './destinations-description.component';

describe('DestinationsDescriptionComponent', () => {
  let component: DestinationsDescriptionComponent;
  let fixture: ComponentFixture<DestinationsDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationsDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
