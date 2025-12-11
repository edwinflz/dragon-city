import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonCard } from './dragon-card';

describe('DragonCard', () => {
  let component: DragonCard;
  let fixture: ComponentFixture<DragonCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
