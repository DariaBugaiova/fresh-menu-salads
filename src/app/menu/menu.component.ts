import { Component, OnDestroy, OnInit } from '@angular/core';
import { SaladDishService } from '../services/salad-dish.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Salad } from '../shared/salad.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  name: Observable<any>;
  salads: Observable<any[]>;

  constructor(public saladDishService: SaladDishService,
              public db: AngularFireDatabase,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    console.log('component init');
    this.salads = this.db.list('salads').valueChanges();
  }

  // saveSalad() {
  //   this.db.list('salads').push(this.saladsI);
  // }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
