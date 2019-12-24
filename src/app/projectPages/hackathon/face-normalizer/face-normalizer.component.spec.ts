import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceNormalizerComponent } from './face-normalizer.component';

describe('FaceNormalizerComponent', () => {
  let component: FaceNormalizerComponent;
  let fixture: ComponentFixture<FaceNormalizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaceNormalizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceNormalizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
