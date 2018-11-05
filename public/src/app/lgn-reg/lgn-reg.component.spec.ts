import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgnRegComponent } from './lgn-reg.component';

describe('LgnRegComponent', () => {
  let component: LgnRegComponent;
  let fixture: ComponentFixture<LgnRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgnRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgnRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
