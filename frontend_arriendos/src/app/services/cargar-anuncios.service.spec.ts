import { TestBed } from '@angular/core/testing';

import { CargarAnunciosService } from './cargar-anuncios.service';

describe('CargarAnunciosService', () => {
  let service: CargarAnunciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarAnunciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
