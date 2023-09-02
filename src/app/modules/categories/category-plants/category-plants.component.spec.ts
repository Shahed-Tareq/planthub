import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPlantsComponent } from './category-plants.component';

describe('CategoryPlantsComponent', () => {
  let component: CategoryPlantsComponent;
  let fixture: ComponentFixture<CategoryPlantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryPlantsComponent]
    });
    fixture = TestBed.createComponent(CategoryPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
