import { Component, OnInit } from '@angular/core';
import { MainLoginComponentAnimation, sesionAnimationStates } from './main-login.component.animation';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.scss'],
  animations: MainLoginComponentAnimation.loginAnimation()
})
export class MainLoginComponent implements OnInit {

  isSignIn = true;

  constructor() { }

  ngOnInit(): void {
  }

  checkIfItIsSignIon(): string {
    return this.isSignIn ? sesionAnimationStates.signIn.state : sesionAnimationStates.signUp.state
  }

}
