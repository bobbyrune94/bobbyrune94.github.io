import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CupanoowordsComponent } from './cupanoowords.component';

describe('CupanoowordsComponent', () => {
  let component: CupanoowordsComponent;
  let fixture: ComponentFixture<CupanoowordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CupanoowordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CupanoowordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
