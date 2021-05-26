import { TestBed } from '@angular/core/testing';

import { FormsValidationsService } from './forms-validations.service';

describe('FormsValidationsService', () => {
  let service: FormsValidationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsValidationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
