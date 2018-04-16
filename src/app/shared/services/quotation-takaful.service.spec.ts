/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuotationTakafulService } from './quotation-takaful.service';

describe('QuotationTakafulService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuotationTakafulService]
    });
  });

  it('should ...', inject([QuotationTakafulService], (service: QuotationTakafulService) => {
    expect(service).toBeTruthy();
  }));
});
