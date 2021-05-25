import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxAnimationsComponent } from './box-animations.component';

describe('BoxAnimationsComponent', () => {
  let component: BoxAnimationsComponent;
  let fixture: ComponentFixture<BoxAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxAnimationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
