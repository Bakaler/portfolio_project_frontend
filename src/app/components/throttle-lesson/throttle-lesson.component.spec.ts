import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrottleLessonComponent } from './throttle-lesson.component';

describe('ThrottleLessonComponent', () => {
  let component: ThrottleLessonComponent;
  let fixture: ComponentFixture<ThrottleLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThrottleLessonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThrottleLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
