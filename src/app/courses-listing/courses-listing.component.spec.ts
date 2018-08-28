import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListingComponent } from './courses-listing.component';

describe('CoursesListingComponent', () => {
  let component: CoursesListingComponent;
  let fixture: ComponentFixture<CoursesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
