import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YextComponent } from './yext.component';

describe('YextComponent', () => {
  let component: YextComponent;
  let fixture: ComponentFixture<YextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
