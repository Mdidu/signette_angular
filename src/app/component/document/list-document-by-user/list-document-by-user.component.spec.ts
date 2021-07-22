import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDocumentByUserComponent } from './list-document-by-user.component';

describe('ListDocumentByUserComponent', () => {
  let component: ListDocumentByUserComponent;
  let fixture: ComponentFixture<ListDocumentByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDocumentByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDocumentByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
