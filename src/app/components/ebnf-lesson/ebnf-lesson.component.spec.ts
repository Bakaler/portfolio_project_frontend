import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbnfLessonComponent } from './ebnf-lesson.component';

describe('EbnfLessonComponent', () => {
  let component: EbnfLessonComponent;
  let fixture: ComponentFixture<EbnfLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EbnfLessonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EbnfLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
