import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVenueComponent } from './single-venue.component';

describe('SingleVenueComponent', () => {
  let component: SingleVenueComponent;
  let fixture: ComponentFixture<SingleVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
