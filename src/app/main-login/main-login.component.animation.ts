import { animate, AnimationTriggerMetadata, keyframes, state, style, transition, trigger } from "@angular/animations";


export const sesionAnimationStates = {
  signIn: {
    state: 'signIn',
    image: `assets/img/pexels-michael-block-3225517.jpg`
  },
  signUp: {
    state: 'signUp',
    image: `assets/img/pexels-jacob-colvin-1761279.jpg`
  }

};


export class MainLoginComponentAnimation {

  static textContentTrigger(): AnimationTriggerMetadata {
    return trigger('textContent', [
      state(sesionAnimationStates.signIn.state, style({
        transform: 'translateX(0)',
        backgroundImage: `url(${sesionAnimationStates.signIn.image})`,
        backgroundSize: 'cover'
      })),
      state(sesionAnimationStates.signUp.state, style({
        transform: 'translateX(143%)',
        backgroundImage: `url(${sesionAnimationStates.signUp.image})`,
        backgroundSize: 'cover'
      })),
      transition(`${sesionAnimationStates.signIn.state} => ${sesionAnimationStates.signUp.state}`, [
        animate('2s', keyframes([
          style({
            opacity: 0.5,
            transform: 'translateX(70%)',
            backgroundImage: `url(${sesionAnimationStates.signUp.image})`,
            offset: 0.5
          }),
          style({
            opacity: 0.9,
            transform: 'translateX(143%)',
            offset: 1
          })
        ]))
      ]),
      transition(`${sesionAnimationStates.signUp.state} => ${sesionAnimationStates.signIn.state}`, [
        animate('2s', keyframes([
          style({
            opacity: 0.5,
            transform: 'translateX(70%)',
            backgroundImage: `url(${sesionAnimationStates.signIn.image})`,
            offset: 0.5
          }),
          style({
            opacity: 0.9,
            transform: 'translateX(0)',
            offset: 1
          })
        ]))
      ])
    ]);
  }

  static formContentTrigger(): AnimationTriggerMetadata {
    return trigger('formContent', [
      state(sesionAnimationStates.signIn.state, style({
        transform: 'translateX(0)'
      })),
      state(sesionAnimationStates.signUp.state, style({
        transform: 'translateX(-70%)'
      })),
      transition(`void => *`, [
        animate('2s', keyframes([
          style({ opacity: 0 }),
          style({ opacity: 1 })
        ])
        )
      ]),
      transition(`${sesionAnimationStates.signUp.state} => ${sesionAnimationStates.signIn.state}`, [
        animate('2s', keyframes([
          style({
            opacity: 0
          }),
          style({
            opacity: 0.1,
            transform: 'translateX(-50%)'
          }),
          style({
            opacity: 0.2,
            transform: 'translateX(-20%)'
          }),
          style({
            opacity: 1,
            transform: 'translateX(0)'
          })
        ])
        )
      ]),
      transition(`${sesionAnimationStates.signIn.state} => ${sesionAnimationStates.signUp.state}`, [
        animate('2s', keyframes([
          style({
            opacity: 0
          }),
          style({
            opacity: 0.1,
            transform: 'translateX(-50%)'
          }),
          style({
            opacity: 0.2,
            transform: 'translateX(-60%)'
          }),
          style({
            opacity: 1,
            transform: 'translateX(-70%)'
          })
        ])
        )
      ])
    ]);
  }

  static loginAnimation(): any[] {
    return [
      MainLoginComponentAnimation.textContentTrigger(),
      MainLoginComponentAnimation.formContentTrigger()
    ]
  }

}
