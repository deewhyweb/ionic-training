import { TestBed } from '@angular/core/testing';

import { RhmapSyncService } from './rhmap-sync.service';

describe('RhmapSyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RhmapSyncService = TestBed.get(RhmapSyncService);
    expect(service).toBeTruthy();
  });
});
