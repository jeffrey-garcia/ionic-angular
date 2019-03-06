import { TestBed, inject } from '@angular/core/testing';

import { JpSharedService } from './jp-shared.service';

describe('PocSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JpSharedService]
    });
  });

  it('should be created', inject([JpSharedService], (service: JpSharedService) => {
    expect(service).toBeTruthy();
  }));
});
