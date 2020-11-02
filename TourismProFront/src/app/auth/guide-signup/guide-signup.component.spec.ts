import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideSignupComponent } from './guide-signup.component';

describe('GuideSignupComponent', () => {
  let component: GuideSignupComponent;
  let fixture: ComponentFixture<GuideSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
