import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsMonthlyViewComponent } from './goals-monthly-view.component';

describe('GoalsMonthlyViewComponent', () => {
  let component: GoalsMonthlyViewComponent;
  let fixture: ComponentFixture<GoalsMonthlyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsMonthlyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsMonthlyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
