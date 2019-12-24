import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinComponent } from './kin.component';

describe('KinComponent', () => {
  let component: KinComponent;
  let fixture: ComponentFixture<KinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
