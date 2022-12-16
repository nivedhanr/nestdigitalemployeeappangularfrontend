import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvisitorComponent } from './viewvisitor.component';

describe('ViewvisitorComponent', () => {
  let component: ViewvisitorComponent;
  let fixture: ComponentFixture<ViewvisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewvisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewvisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
