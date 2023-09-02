import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPlantComponent } from './saved-plant.component';

describe('SavedPlantComponent', () => {
  let component: SavedPlantComponent;
  let fixture: ComponentFixture<SavedPlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedPlantComponent]
    });
    fixture = TestBed.createComponent(SavedPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
