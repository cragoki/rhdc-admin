import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRacesComponent } from './event-races.component';

describe('EventRacesComponent', () => {
  let component: EventRacesComponent;
  let fixture: ComponentFixture<EventRacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventRacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
