import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentDisplayComponent } from './sentiment-display.component';

describe('SentimentDisplayComponent', () => {
  let component: SentimentDisplayComponent;
  let fixture: ComponentFixture<SentimentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
