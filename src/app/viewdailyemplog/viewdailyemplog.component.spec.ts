import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdailyemplogComponent } from './viewdailyemplog.component';

describe('ViewdailyemplogComponent', () => {
  let component: ViewdailyemplogComponent;
  let fixture: ComponentFixture<ViewdailyemplogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdailyemplogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdailyemplogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
