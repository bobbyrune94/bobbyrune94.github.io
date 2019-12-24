import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cheer2015Component } from './cheer2015.component';

describe('Cheer2015Component', () => {
  let component: Cheer2015Component;
  let fixture: ComponentFixture<Cheer2015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cheer2015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cheer2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
