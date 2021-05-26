import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';

export const sesionStates  = {
  signIn: {
    state: 'signIn',    
    image: `assets/img/pexels-michael-block-3225517.jpg`
  },
  signUp: {
    state: 'signUp',
    image: `assets/img/pexels-jacob-colvin-1761279.jpg`
  }
  
};


@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.scss'],
  animations: [
    trigger('textContent', [
      state(sesionStates.signIn.state, style({
        transform: 'translateX(0)',
        backgroundImage: `url(${sesionStates.signIn.image})`,
        backgroundSize: 'cover'
      })),
      state(sesionStates.signUp.state, style({
        transform: 'translateX(143%)',
        backgroundImage: `url(${sesionStates.signUp.image})`,
        backgroundSize: 'cover'
      })),
      transition(`${sesionStates.signIn.state} => ${sesionStates.signUp.state}`, [
        animate('2s', keyframes([
          style({ opacity: 0.5, transform: 'translateX(70%)', backgroundImage: `url(${sesionStates.signUp.image})`, offset: 0.5}),
          style({ opacity: 0.9, transform: 'translateX(143%)', offset: 1})
        ]))
      ]),
      transition(`${sesionStates.signUp.state} => ${sesionStates.signIn.state}`, [
        animate('2s', keyframes([
          style({ opacity: 0.5, transform: 'translateX(70%)', backgroundImage: `url(${sesionStates.signIn.image})`, offset: 0.5 }),
          style({ opacity: 0.9, transform: 'translateX(0)', offset: 1 })
        ]))
      ])      
    ]),
    trigger('formContent', [
      state(sesionStates.signIn.state, style({
        transform: 'translateX(0)'
      })),
      state(sesionStates.signUp.state, style({
        transform: 'translateX(-70%)'
      })),
      transition(`void => *`, [
        animate('2s', keyframes([
            style({ opacity: 0 }),
            style({ opacity: 1 })
          ])
        )
      ]),
      transition(`${sesionStates.signUp.state} => ${sesionStates.signIn.state}`, [
        animate('2s', keyframes([
            style({ opacity: 0 }),
            style({ opacity: 0, transform: 'translateX(-50)' }),
            style({ opacity: 0, transform: 'translateX(-60)' }),
            style({ opacity: 1, transform: 'translateX(0)' })
          ])
        )
      ]),
      transition(`* => ${sesionStates.signUp.state}`, [
        animate('2s')
      ])   
    ])
  ]
})
export class MainLoginComponent implements OnInit {

  isSignIn = true;

  constructor() { }

  ngOnInit(): void {
  }

}
