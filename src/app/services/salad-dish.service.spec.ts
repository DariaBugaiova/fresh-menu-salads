import { TestBed } from '@angular/core/testing';

import { SaladDishService } from './salad-dish.service';

describe('SaladDishService', () => {
  let service: SaladDishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaladDishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
