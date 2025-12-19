import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonForm } from './dragon-form';

describe('DragonForm', () => {
  let component: DragonForm;
  let fixture: ComponentFixture<DragonForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
