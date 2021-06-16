import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripByClientComponent } from './trip-by-client.component';

describe('TripByClientComponent', () => {
  let component: TripByClientComponent;
  let fixture: ComponentFixture<TripByClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripByClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
