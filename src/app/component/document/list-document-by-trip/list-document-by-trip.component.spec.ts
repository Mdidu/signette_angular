import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDocumentByTripComponent } from './list-document-by-trip.component';

describe('ListDocumentByTripComponent', () => {
  let component: ListDocumentByTripComponent;
  let fixture: ComponentFixture<ListDocumentByTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDocumentByTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDocumentByTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
