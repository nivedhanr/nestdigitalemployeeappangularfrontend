import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdailyemplogsecurityComponent } from './viewdailyemplogsecurity.component';

describe('ViewdailyemplogsecurityComponent', () => {
  let component: ViewdailyemplogsecurityComponent;
  let fixture: ComponentFixture<ViewdailyemplogsecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdailyemplogsecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdailyemplogsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
