import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { SaladDishService } from '../services/salad-dish.service';
import { Observable } from 'rxjs';
import { Salad } from '../shared/salad.model';

@Injectable()
export class SaladDishResolve implements Resolve<Salad> {
  constructor(private saladDishService: SaladDishService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Salad> {
    return this.saladDishService.getSaladById(+route.paramMap.get('id'));
  }
}
