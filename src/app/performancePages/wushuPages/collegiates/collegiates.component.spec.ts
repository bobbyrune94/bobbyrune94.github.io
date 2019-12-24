import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegiatesComponent } from './collegiates.component';

describe('CollegiatesComponent', () => {
  let component: CollegiatesComponent;
  let fixture: ComponentFixture<CollegiatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegiatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegiatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
