import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedDisplayComponent } from './combined-display.component';

describe('CombinedDisplayComponent', () => {
  let component: CombinedDisplayComponent;
  let fixture: ComponentFixture<CombinedDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinedDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
