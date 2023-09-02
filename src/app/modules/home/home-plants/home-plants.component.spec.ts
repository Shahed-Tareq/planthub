import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlantsComponent } from './home-plants.component';

describe('HomePlantsComponent', () => {
  let component: HomePlantsComponent;
  let fixture: ComponentFixture<HomePlantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePlantsComponent]
    });
    fixture = TestBed.createComponent(HomePlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
