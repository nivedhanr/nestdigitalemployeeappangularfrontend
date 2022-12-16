import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewdailyvisitorlog1Component } from './viewdailyvisitorlog1.component';

describe('Viewdailyvisitorlog1Component', () => {
  let component: Viewdailyvisitorlog1Component;
  let fixture: ComponentFixture<Viewdailyvisitorlog1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Viewdailyvisitorlog1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewdailyvisitorlog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
