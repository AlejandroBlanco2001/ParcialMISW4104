import { TestBed } from '@angular/core/testing';

import { ListadoPlantaService } from './listado-planta.service';

describe('ListadoPlantaService', () => {
  let service: ListadoPlantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoPlantaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
