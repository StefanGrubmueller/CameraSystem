import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLapseComponent } from './time-lapse.component';

describe('TimeLapseComponent', () => {
  let component: TimeLapseComponent;
  let fixture: ComponentFixture<TimeLapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLapseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeLapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
