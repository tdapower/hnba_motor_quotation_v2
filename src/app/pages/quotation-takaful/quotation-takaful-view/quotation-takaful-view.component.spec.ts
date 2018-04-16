import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationTakafulViewComponent } from './quotation-takaful-view.component';

describe('QuotationTakafulViewComponent', () => {
  let component: QuotationTakafulViewComponent;
  let fixture: ComponentFixture<QuotationTakafulViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationTakafulViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationTakafulViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
