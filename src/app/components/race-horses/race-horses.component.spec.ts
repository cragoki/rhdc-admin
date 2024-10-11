import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceHorsesComponent } from './race-horses.component';

describe('RaceHorsesComponent', () => {
  let component: RaceHorsesComponent;
  let fixture: ComponentFixture<RaceHorsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaceHorsesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceHorsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
