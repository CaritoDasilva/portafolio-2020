import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestWorksComponent } from './best-works.component';

describe('BestWorksComponent', () => {
  let component: BestWorksComponent;
  let fixture: ComponentFixture<BestWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
