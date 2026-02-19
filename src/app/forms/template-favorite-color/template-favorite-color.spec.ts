import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFavoriteColor } from './template-favorite-color';

describe('TemplateFavoriteColor', () => {
  let component: TemplateFavoriteColor;
  let fixture: ComponentFixture<TemplateFavoriteColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFavoriteColor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFavoriteColor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
