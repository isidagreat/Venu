import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuMapViewComponent } from './venu-map-view.component';

describe('VenuMapViewComponent', () => {
  let component: VenuMapViewComponent;
  let fixture: ComponentFixture<VenuMapViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenuMapViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuMapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
