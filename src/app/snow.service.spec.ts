import { TestBed, inject } from '@angular/core/testing';

import { SnowService } from './snow.service';

describe('SnowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnowService]
    });
  });

  it('should be created', inject([SnowService], (service: SnowService) => {
    expect(service).toBeTruthy();
  }));
});
