/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PeliculaService } from './pelicula.service';

describe('PeliculaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeliculaService]
    });
  });

  it('should ...', inject([PeliculaService], (service: PeliculaService) => {
    expect(service).toBeTruthy();
  }));
});
