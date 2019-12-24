import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cheer2014Component } from './cheer2014.component';

describe('Cheer2014Component', () => {
  let component: Cheer2014Component;
  let fixture: ComponentFixture<Cheer2014Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cheer2014Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cheer2014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
