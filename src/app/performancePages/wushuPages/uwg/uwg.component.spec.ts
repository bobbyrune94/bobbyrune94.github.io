import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UwgComponent } from './uwg.component';

describe('UwgComponent', () => {
  let component: UwgComponent;
  let fixture: ComponentFixture<UwgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UwgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UwgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
