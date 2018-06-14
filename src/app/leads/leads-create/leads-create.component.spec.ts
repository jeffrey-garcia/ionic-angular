import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsCreateComponent } from './leads-create.component';

describe('LeadsCreateComponent', () => {
  let component: LeadsCreateComponent;
  let fixture: ComponentFixture<LeadsCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
