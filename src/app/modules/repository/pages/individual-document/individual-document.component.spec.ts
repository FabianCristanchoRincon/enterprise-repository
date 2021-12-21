import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualDocumentComponent } from './individual-document.component';

describe('IndividualDocumentComponent', () => {
  let component: IndividualDocumentComponent;
  let fixture: ComponentFixture<IndividualDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
