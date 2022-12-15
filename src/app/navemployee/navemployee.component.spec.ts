import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavemployeeComponent } from './navemployee.component';

describe('NavemployeeComponent', () => {
  let component: NavemployeeComponent;
  let fixture: ComponentFixture<NavemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
