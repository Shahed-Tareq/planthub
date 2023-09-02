import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallaryContainerComponent } from './gallary-container.component';

describe('GallaryContainerComponent', () => {
  let component: GallaryContainerComponent;
  let fixture: ComponentFixture<GallaryContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GallaryContainerComponent]
    });
    fixture = TestBed.createComponent(GallaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
