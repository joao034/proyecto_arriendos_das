import { TestBed } from '@angular/core/testing';

import { ApiCalificacionesService } from './api-calificaciones.service';

describe('ApiCalificacionesService', () => {
  let service: ApiCalificacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCalificacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
