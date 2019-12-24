import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WushuComponent } from './wushu.component';

describe('WushuComponent', () => {
  let component: WushuComponent;
  let fixture: ComponentFixture<WushuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WushuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WushuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
