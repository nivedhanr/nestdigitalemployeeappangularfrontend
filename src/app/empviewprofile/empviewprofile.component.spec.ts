import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpviewprofileComponent } from './empviewprofile.component';

describe('EmpviewprofileComponent', () => {
  let component: EmpviewprofileComponent;
  let fixture: ComponentFixture<EmpviewprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpviewprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpviewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
