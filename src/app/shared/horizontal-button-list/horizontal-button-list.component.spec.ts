import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalButtonListComponent } from './horizontal-button-list.component';

describe('HorizontalButtonListComponent', () => {
  let component: HorizontalButtonListComponent;
  let fixture: ComponentFixture<HorizontalButtonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalButtonListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
