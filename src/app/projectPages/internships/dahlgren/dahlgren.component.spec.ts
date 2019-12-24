import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DahlgrenComponent } from './dahlgren.component';

describe('DahlgrenComponent', () => {
  let component: DahlgrenComponent;
  let fixture: ComponentFixture<DahlgrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DahlgrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DahlgrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
