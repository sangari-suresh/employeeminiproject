import { TestBed } from '@angular/core/testing';

import { AllemployeesService } from './allemployees.service';

describe('AllemployeesService', () => {
  let service: AllemployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllemployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
