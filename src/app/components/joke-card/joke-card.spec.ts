import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeCard } from './joke-card';

describe('JokeCard', () => {
  let component: JokeCard;
  let fixture: ComponentFixture<JokeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokeCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
