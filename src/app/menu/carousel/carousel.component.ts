import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Salad } from '../../shared/salad.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnChanges {
  @Input() salads: Observable<Salad[]>;
  saladsCard: Salad[];

  currentSlide = 0;

  constructor(private router: Router,
              public route: ActivatedRoute) { }

  ngOnChanges(): void {
    this.salads.subscribe(salads => this.saladsCard = salads);
  }

  getSlideCount(i: number) {
    let count = this.saladsCard.length - this.currentSlide;
    return count < 4 && i === --count ? 0 : this.currentSlide;
  }

  viewCard(id: number) {
    this.router.navigate([id], {relativeTo: this.route});
  }

  onPreviousClick() {
    const previous = this.currentSlide - 3;
    this.currentSlide = previous < 0 ? this.saladsCard.length - 3 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 3;
    this.currentSlide = next === this.saladsCard.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
}
