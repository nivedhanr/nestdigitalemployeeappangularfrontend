import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navadmin1Component } from './navadmin1.component';

describe('Navadmin1Component', () => {
  let component: Navadmin1Component;
  let fixture: ComponentFixture<Navadmin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navadmin1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navadmin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
