import { TestBed } from '@angular/core/testing';

import { LinhaService } from './linha.service';

describe('LinhaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinhaService = TestBed.get(LinhaService);
    expect(service).toBeTruthy();
  });
});
