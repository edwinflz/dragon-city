import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonModal } from './dragon-modal';

describe('DragonModal', () => {
  let component: DragonModal;
  let fixture: ComponentFixture<DragonModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
