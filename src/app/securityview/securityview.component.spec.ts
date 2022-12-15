import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityviewComponent } from './securityview.component';

describe('SecurityviewComponent', () => {
  let component: SecurityviewComponent;
  let fixture: ComponentFixture<SecurityviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
