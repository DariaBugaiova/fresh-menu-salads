import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladCardComponent } from './salad-card.component';

describe('SaladCardComponent', () => {
  let component: SaladCardComponent;
  let fixture: ComponentFixture<SaladCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaladCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
