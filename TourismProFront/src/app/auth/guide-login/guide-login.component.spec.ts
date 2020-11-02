import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideLoginComponent } from './guide-login.component';

describe('GuideLoginComponent', () => {
  let component: GuideLoginComponent;
  let fixture: ComponentFixture<GuideLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
