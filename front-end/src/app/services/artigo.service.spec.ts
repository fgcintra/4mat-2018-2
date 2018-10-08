import { TestBed } from '@angular/core/testing';

import { ArtigoService } from './artigo.service';

describe('ArtigoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtigoService = TestBed.get(ArtigoService);
    expect(service).toBeTruthy();
  });
});
