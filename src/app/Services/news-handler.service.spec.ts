import { TestBed } from '@angular/core/testing';

import { NewsHandlerService } from './news-handler.service';

describe('NewsHandlerService', () => {
  let service: NewsHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
