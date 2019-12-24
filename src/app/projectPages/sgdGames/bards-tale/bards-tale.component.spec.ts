import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BardsTaleComponent } from './bards-tale.component';

describe('BardsTaleComponent', () => {
  let component: BardsTaleComponent;
  let fixture: ComponentFixture<BardsTaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BardsTaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BardsTaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
