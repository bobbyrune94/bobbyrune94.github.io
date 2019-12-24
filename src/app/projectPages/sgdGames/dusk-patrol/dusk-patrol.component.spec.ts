import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuskPatrolComponent } from './dusk-patrol.component';

describe('DuskPatrolComponent', () => {
  let component: DuskPatrolComponent;
  let fixture: ComponentFixture<DuskPatrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuskPatrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuskPatrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
