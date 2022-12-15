import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityviewprofileComponent } from './securityviewprofile.component';

describe('SecurityviewprofileComponent', () => {
  let component: SecurityviewprofileComponent;
  let fixture: ComponentFixture<SecurityviewprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityviewprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityviewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
