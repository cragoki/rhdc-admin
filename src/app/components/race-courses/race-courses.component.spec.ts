import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceCoursesComponent } from './race-courses.component';

describe('RaceCoursesComponent', () => {
  let component: RaceCoursesComponent;
  let fixture: ComponentFixture<RaceCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaceCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
