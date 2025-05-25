import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarcraftPageComponent } from './starcraftPage.component';

describe('StarcraftPageComponent', () => {
  let component: StarcraftPageComponent;
  let fixture: ComponentFixture<StarcraftPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarcraftPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarcraftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
