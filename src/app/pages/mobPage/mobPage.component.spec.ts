import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobPageComponent } from './mobPage.component';

describe('MobPageComponent', () => {
  let component: MobPageComponent;
  let fixture: ComponentFixture<MobPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
