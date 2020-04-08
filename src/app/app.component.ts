import { Component, OnInit } from '@angular/core';
import { trigger,
         state,
         style,
         transition,
         animate
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger ('divState', [
      state('normal', style({
        'background-color': 'blue',
        transform: 'translateX(0)'
      })),
      state('highlighted',
        style({
          'background-color': 'blue',
          transform: 'translateX(100px)'
        })),
      transition('normal <=> highlighted', animate(400))
    ]),
    trigger ('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted',
        style({
          'background-color': 'blue',
          transform: 'translateX(100px)'
        })),
      state('wild',
        style({
          'background-color': 'green',
          transform: 'translateX(0) scale(0.5)'
        })
      ),
      transition('normal <=> highlighted', animate(800)),
      transition('wild <=> *', [
        style({
          'background-color': 'orange',
          borderRadius: '0px'
        }),
        animate(2000, style({
          borderRadius: '50px',
        })),
        animate(500)
      ])
    ])
    ]
})
export class AppComponent implements OnInit {
  state = 'normal';
  wildState = 'normal';

  title = 'salads-menu';

  ngOnInit(): void {}

  onAnimate() {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onWild() {
    this.wildState = 'wild';
  }

  constructor() {}
}
