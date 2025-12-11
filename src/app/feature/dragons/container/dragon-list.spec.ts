import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonList } from './dragon-list';

describe('DragonList', () => {
  let component: DragonList;
  let fixture: ComponentFixture<DragonList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
