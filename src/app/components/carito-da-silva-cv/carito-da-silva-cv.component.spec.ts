import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaritoDaSilvaCVComponent } from './carito-da-silva-cv.component';

describe('CaritoDaSilvaCVComponent', () => {
  let component: CaritoDaSilvaCVComponent;
  let fixture: ComponentFixture<CaritoDaSilvaCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaritoDaSilvaCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaritoDaSilvaCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
