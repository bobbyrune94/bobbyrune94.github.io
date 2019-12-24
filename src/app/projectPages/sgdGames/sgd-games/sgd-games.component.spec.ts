import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgdGamesComponent } from './sgd-games.component';

describe('SgdGamesComponent', () => {
  let component: SgdGamesComponent;
  let fixture: ComponentFixture<SgdGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgdGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgdGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
