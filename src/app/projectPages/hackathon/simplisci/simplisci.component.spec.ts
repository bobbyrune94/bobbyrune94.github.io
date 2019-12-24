import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplisciComponent } from './simplisci.component';

describe('SimplisciComponent', () => {
  let component: SimplisciComponent;
  let fixture: ComponentFixture<SimplisciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplisciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplisciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
