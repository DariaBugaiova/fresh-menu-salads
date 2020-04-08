import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SaladDishService } from '../../services/salad-dish.service';
import { AuthService } from '../../auth/auth.service';
import { Salad } from '../../shared/salad.model';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  salad: Salad;

  constructor( public authService: AuthService,
               private route: ActivatedRoute,
               private saladDishService: SaladDishService,
               private router: Router ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.salad = data.salad);
  }

  editSaladInfo() {
    this.router.navigate(['card-edit'],
      { relativeTo: this.route, state: {data: this.salad}});
  }
}
