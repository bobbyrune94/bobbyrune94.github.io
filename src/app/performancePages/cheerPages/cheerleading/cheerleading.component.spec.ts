import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheerleadingComponent } from './cheerleading.component';

describe('CheerleadingComponent', () => {
  let component: CheerleadingComponent;
  let fixture: ComponentFixture<CheerleadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheerleadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheerleadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
