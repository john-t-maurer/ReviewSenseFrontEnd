import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordFrequencyDisplayComponent } from './word-frequency-display.component';

describe('WordFrequencyDisplayComponent', () => {
  let component: WordFrequencyDisplayComponent;
  let fixture: ComponentFixture<WordFrequencyDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordFrequencyDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordFrequencyDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
