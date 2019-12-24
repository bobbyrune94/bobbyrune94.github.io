import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoohacksComponent } from './hoohacks.component';

describe('HoohacksComponent', () => {
  let component: HoohacksComponent;
  let fixture: ComponentFixture<HoohacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoohacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoohacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
