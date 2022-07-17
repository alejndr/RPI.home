import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAnimatedWavesComponent } from './header-animated-waves.component';

describe('HeaderAnimatedWavesComponent', () => {
  let component: HeaderAnimatedWavesComponent;
  let fixture: ComponentFixture<HeaderAnimatedWavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAnimatedWavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAnimatedWavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
