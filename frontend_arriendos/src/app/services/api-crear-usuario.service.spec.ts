import { TestBed } from '@angular/core/testing';

import { ApiCrearUsuarioService } from './api-crear-usuario.service';

describe('ApiCrearUsuarioService', () => {
  let service: ApiCrearUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCrearUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
