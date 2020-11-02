import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTripGuideComponent } from './single-trip-guide.component';

describe('SingleTripGuideComponent', () => {
  let component: SingleTripGuideComponent;
  let fixture: ComponentFixture<SingleTripGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTripGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTripGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
