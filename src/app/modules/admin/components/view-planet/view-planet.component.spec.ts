import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlanetComponent } from './view-planet.component';

describe('ViewPlanetComponent', () => {
  let component: ViewPlanetComponent;
  let fixture: ComponentFixture<ViewPlanetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPlanetComponent]
    });
    fixture = TestBed.createComponent(ViewPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
