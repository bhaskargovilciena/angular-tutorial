import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteColor } from './favorite-color';

describe('FavoriteColor', () => {
  let component: FavoriteColor;
  let fixture: ComponentFixture<FavoriteColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteColor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteColor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
