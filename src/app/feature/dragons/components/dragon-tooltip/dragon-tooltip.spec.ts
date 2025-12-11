import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonTooltip } from './dragon-tooltip';

describe('DragonTooltip', () => {
  let component: DragonTooltip;
  let fixture: ComponentFixture<DragonTooltip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonTooltip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonTooltip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
