import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewvisitorlog2Component } from './viewvisitorlog2.component';

describe('Viewvisitorlog2Component', () => {
  let component: Viewvisitorlog2Component;
  let fixture: ComponentFixture<Viewvisitorlog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Viewvisitorlog2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewvisitorlog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
