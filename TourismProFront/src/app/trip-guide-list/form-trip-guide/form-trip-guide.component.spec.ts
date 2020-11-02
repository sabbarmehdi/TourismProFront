import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTripGuideComponent } from './form-trip-guide.component';

describe('FormTripGuideComponent', () => {
  let component: FormTripGuideComponent;
  let fixture: ComponentFixture<FormTripGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTripGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTripGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
