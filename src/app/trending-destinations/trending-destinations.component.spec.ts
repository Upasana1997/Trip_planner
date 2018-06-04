import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingDestinationsComponent } from './trending-destinations.component';

describe('TrendingDestinationsComponent', () => {
  let component: TrendingDestinationsComponent;
  let fixture: ComponentFixture<TrendingDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
