import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('box', [
      state('start', style({background: 'red'})),
      state('end', style({background: 'yellow', transform: 'scale(1.3)'})),
      state('special', style({
        background: 'orange',
        transform: 'scale(1.6)',
        borderRadius: '50%'
      })),
      transition('start => end', animate(900)),
      transition('end => start', animate(700)),
      transition('special <=> *', [
        style({background: 'blue'}), animate(800,
          style({background: 'pink'})),
          animate(800)
      ]),
      transition(':enter', [
        style({ opacity : 0}),
        animate(700)
      ]),
      transition(':leave', [
        style({ opacity : 1}),
        animate(700)
      ])
      
    ])
  ]
})
export class AppComponent {
  
  boxState = 'start'
  visible = true
  animation(){
    this.boxState = this.boxState === 'end' ? 'start' : 'end'
  }

}
