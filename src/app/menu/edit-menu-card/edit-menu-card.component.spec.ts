import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuCardComponent } from './edit-menu-card.component';

describe('EditMenuCardComponent', () => {
  let component: EditMenuCardComponent;
  let fixture: ComponentFixture<EditMenuCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMenuCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
