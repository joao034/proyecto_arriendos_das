import { TestBed } from '@angular/core/testing';

import { CargarSelectsService } from './cargar-selects.service';

describe('CargarSelectsService', () => {
  let service: CargarSelectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarSelectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
