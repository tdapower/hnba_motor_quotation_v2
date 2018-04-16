import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationBasicComponent } from './quotation-basic.component';

describe('QuotationBasicComponent', () => {
  let component: QuotationBasicComponent;
  let fixture: ComponentFixture<QuotationBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
