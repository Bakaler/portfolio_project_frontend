import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicPageComponent } from './comicPage.component';

describe('ComicPageComponent', () => {
  let component: ComicPageComponent;
  let fixture: ComponentFixture<ComicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
