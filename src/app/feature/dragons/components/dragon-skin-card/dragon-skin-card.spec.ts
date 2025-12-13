import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonSkinCard } from './dragon-skin-card';

describe('DragonSkinCard', () => {
  let component: DragonSkinCard;
  let fixture: ComponentFixture<DragonSkinCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonSkinCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonSkinCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
