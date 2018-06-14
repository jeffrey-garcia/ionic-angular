import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsSearchComponent } from './leads-search.component';

describe('LeadsSearchComponent', () => {
  let component: LeadsSearchComponent;
  let fixture: ComponentFixture<LeadsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
