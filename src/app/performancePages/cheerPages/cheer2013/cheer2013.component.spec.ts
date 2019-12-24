import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cheer2013Component } from './cheer2013.component';

describe('Cheer2013Component', () => {
  let component: Cheer2013Component;
  let fixture: ComponentFixture<Cheer2013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cheer2013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cheer2013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
