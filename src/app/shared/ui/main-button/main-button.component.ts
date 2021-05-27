import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainButtonComponent implements OnInit {

  @Input() disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

}
