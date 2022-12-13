import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navadmin2Component } from './navadmin2.component';

describe('Navadmin2Component', () => {
  let component: Navadmin2Component;
  let fixture: ComponentFixture<Navadmin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navadmin2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navadmin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
