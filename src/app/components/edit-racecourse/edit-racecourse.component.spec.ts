import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRacecourseComponent } from './edit-racecourse.component';

describe('EditRacecourseComponent', () => {
  let component: EditRacecourseComponent;
  let fixture: ComponentFixture<EditRacecourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRacecourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRacecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
