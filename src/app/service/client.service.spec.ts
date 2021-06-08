import { TestBed } from '@angular/core/testing';

import { Service.ClientService } from './service.client.service';

describe('Service.ClientService', () => {
  let service: Service.ClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service.ClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
