import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-social-media-session',
  templateUrl: './social-media-session.component.html',
  styleUrls: ['./social-media-session.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialMediaSessionComponent {

  @Input() disabled = false;

  @Output() clickOnGoogle = new EventEmitter<void>();
  @Output() clickOnFacebook = new EventEmitter<void>();
  @Output() clickOnTwitter = new EventEmitter<void>();

  constructor() { }

}
