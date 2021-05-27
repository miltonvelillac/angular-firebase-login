import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaSessionComponent } from './social-media-session.component';

describe('SocialMediaSessionComponent', () => {
  let component: SocialMediaSessionComponent;
  let fixture: ComponentFixture<SocialMediaSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
