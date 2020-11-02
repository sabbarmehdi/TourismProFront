import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripGuideListComponent } from './trip-guide-list.component';

describe('TripGuideListComponent', () => {
  let component: TripGuideListComponent;
  let fixture: ComponentFixture<TripGuideListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripGuideListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripGuideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
